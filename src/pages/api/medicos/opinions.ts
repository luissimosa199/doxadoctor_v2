import { OpinionModel } from "@/db/models/opinionsModel";
import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";
import { UserModel } from "@/db/models/userModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    if (!body.rank || !body.comment) {
      res.status(400).end(`Error: Missing rank or comment`);
    }

    try {
      const newOpinion = new OpinionModel({
        _id: nanoid(9),
        name: body.name || "Anónimo",
        rank: body.rank,
        comment: body.comment,
        email: body.email || "",
        doctorName: body.doctorName,
        doctorId: body.doctorId,
        files: body.files || [],
        audio: body.audio,
      });

      await newOpinion.save();

      res.status(200).json({ message: "Comment Saved" });
    } catch (err) {
      res.status(500).end(`Error: ${JSON.stringify(err)}`);
    }
  } else if (req.method === "GET") {
    const { doctorId, page = 1, limit = 10 } = req.query;

    if (!doctorId) {
      const session = await getServerSession(req, res, authOptions);

      if (!session || !session.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const startIndex =
        (parseInt(page as string) - 1) * parseInt(limit as string);

      const opinions = await OpinionModel.find({
        aproved: false,
      })
        .select("name email doctorName createdAt rank comment files audio")
        .skip(startIndex)
        .limit(parseInt(limit as string));

      const totalOpinions = await OpinionModel.countDocuments({
        aproved: false,
      });
      const totalPages = Math.ceil(totalOpinions / parseInt(limit as string));

      return res.status(200).json({
        opinions,
        totalPages,
        currentPage: parseInt(page as string),
        totalOpinions,
      });
    }

    const doctorExists = await UserModel.exists({ _id: doctorId });

    if (!doctorExists) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    const opinions = await OpinionModel.find({
      doctorId,
      aproved: true,
    }).select("name createdAt rank comment files audio");
    return res.status(200).json(opinions);
  } else if (req.method === "PUT") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Missing id in query parameters" });
    }

    const opinion = await OpinionModel.findById(id);

    if (!opinion) {
      return res.status(404).json({ error: "Opinion not found" });
    }

    opinion.aproved = true;
    await opinion.save();

    return res.status(200).json({ message: "Opinion approved successfully" });
  } else {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
