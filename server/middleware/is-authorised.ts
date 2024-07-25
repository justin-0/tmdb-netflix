import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { User } from "../models/user-model";

type DecodedToken = {
  userId: string;
};

export async function isAuthorised(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: "Unauthorised" }).redirect("/");
  }

  try {
    const { userId } = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as DecodedToken;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(401).json({ message: "User not found" }).redirect("/");
    }

    next();
  } catch (error) {}
}
