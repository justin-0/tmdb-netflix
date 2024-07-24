import mongoose from "mongoose";
import "dotenv/config";

export const db = mongoose
  .connect(process.env?.MONGO_URI ?? "", {})
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    if (err instanceof Error) {
      console.log(err.message);
    }
  });
