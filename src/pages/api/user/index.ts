import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/dbConnect";
import { UserModel } from "@/db/models/userModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { OpinionModel } from "@/db/models/opinionsModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const session = await getServerSession(req, res, authOptions);

  try {
    if (req.method === "GET") {
      const { name, tags, username, page = 1, limit = 10 } = req.query;

      const currentPage = parseInt(page as string) || 1;
      const pageSize = parseInt(limit as string) || 10;

      let query: any = { role: "DOCTOR" };

      if (session && session.user && session.user.email) {
        query.email = { $ne: session.user.email };
      }

      if (name) {
        query.name = new RegExp(`^${name}`, "i");
      }

      if (username) {
        query.email = username;
      }

      if (tags) {
        const tagsArray = Array.isArray(tags) ? tags : [tags];
        query.tags = { $all: tagsArray };
      }

      const users = await UserModel.find(query)
        .select("email image name tags slug online type address phone hours")
        .sort({ name: 1, _id: 1 }) // Sort by name first, then by _id
        .limit(pageSize)
        .skip((currentPage - 1) * pageSize);

      const opinionsPromises = users.map((user) =>
        OpinionModel.aggregate([
          { $match: { doctorId: user._id } },
          {
            $group: {
              _id: "$doctorId",
              rank: { $avg: "$rank" },
              votes: { $sum: 1 },
            },
          },
        ])
      );

      const opinions = await Promise.all(opinionsPromises);

      const usersWithOpinions = users.map((user, index) => {
        const opinion = opinions[index][0]; // Get the first (and only) opinion for the user
        if (opinion) {
          return {
            ...user._doc,
            rank: opinion.rank,
            votes: opinion.votes,
          };
        } else {
          return user;
        }
      });

      if (!usersWithOpinions || usersWithOpinions.length === 0) {
        return res.status(200).json([]);
      }

      return res.status(200).json(usersWithOpinions);
    } else {
      return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
