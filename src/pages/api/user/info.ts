import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/dbConnect";
import { UserModel } from "@/db/models/userModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  try {
    if (req.method === "POST") {
      const { address, hours, phone } = JSON.parse(req.body);

      let updateData: { address?: string; hours?: string; phone?: string } = {};

      if (address !== undefined) {
        updateData.address = address;
      }
      if (hours !== undefined) {
        updateData.hours = hours;
      }
      if (phone !== undefined) {
        updateData.phone = phone;
      }

      if (!Object.keys(updateData).length) {
        return res.status(422).json({ error: "No info provided" });
      }

      const updatedUser = await UserModel.findOneAndUpdate(
        { email: username },
        { $set: updateData },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(updatedUser);
    } else if (req.method === "GET") {
      const user = await UserModel.findOne({ email: username }).select(
        "address hours phone"
      );
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } else {
      return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
