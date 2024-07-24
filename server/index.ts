import express from "express";
import { authRouter } from "./routes/auth-route";
import cookieParser from "cookie-parser";
import { db } from "./lib/db";
import cors from "cors";
import movieRouter from "./routes/movie-route";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
// CSRF Protection
app.use((req, res, next) => {
  const origin = req.headers.origin ?? null;
  const host = req.headers.host ?? null;
  if (!origin) {
    return next();
  }
  const originHost = new URL(origin).host;
  if (originHost !== host) {
    return res.status(403);
  }
  next();
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movie", movieRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
  db;
});
