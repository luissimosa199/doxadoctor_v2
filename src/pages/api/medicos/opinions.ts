import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = req.body;
    console.log("Received POST request with data:", body);
    res.status(200).json({ message: "POST request received", data: body });
  } else if (req.method === "GET") {
    console.log("Received GET request");
    res.status(200).json({ message: "GET request received" });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
