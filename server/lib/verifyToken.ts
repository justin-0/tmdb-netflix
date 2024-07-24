import jwt from "jsonwebtoken";
import "dotenv/config";

const secret = process.env.JWT_SECRET as string;

export const verifyToken = (token: string) => {
  const verified = jwt.verify(token, secret);

  return verified || false;
};
