import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db/dbConnect"; // Adjust the path to your MongoDB connection utility
import { UserModel } from "../../db/models/userModel"; // Adjust the path to your User model
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, password, user_agent_id, isDoctor, type } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Campos requeridos incompletos." });
  }

  await dbConnect();

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "Usuario con el mismo mail ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let slug = name.toLowerCase().replaceAll(" ", "-");
    let originalSlug = slug;
    let counter = 1;

    while (true) {
      const existingSlugUser = await UserModel.findOne({ slug });
      if (!existingSlugUser) break;
      slug = `${originalSlug}-${counter}`;
      counter++;
    }

    const user = new UserModel({
      name,
      email,
      user_agent_id,
      password: hashedPassword,
      slug,
      type,
      role: isDoctor === "true" ? "DOCTOR" : "USER",
    });
    await user.save();

    return res
      .status(201)
      .json({ message: "Usuario registrado correctamente." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: `Error: ${error}` });
  }
}
