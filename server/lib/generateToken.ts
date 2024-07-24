import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.JWT_SECRET as string;

export const generateToken = (userId: any) => {
  const token = jwt.sign({ userId }, secret, {
    expiresIn: "7d",
  });

  const cookieOptions = {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict" as const,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };

  return { token, cookieOptions };
};
