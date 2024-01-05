import { OpinionModel } from "@/db/models/opinionsModel";
import { NextApiRequest, NextApiResponse } from "next";
import { nanoid } from "nanoid";

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
      });

      await newOpinion.save();

      res.status(200).json({ message: "Comment Saved" });
    } catch (err) {
      res.status(500).end(`Error: ${JSON.stringify(err)}`);
    }
  } else if (req.method === "GET") {
    console.log("Received GET request");
    res.status(200).json({ message: "GET request received" });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
