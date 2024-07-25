import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth-route";
import movieRouter from "./routes/movie-route";
import { db } from "./lib/db";
import { tvShowRouter } from "./routes/tv-show-route";

const app = express();
// Middleware
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
// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movie", movieRouter);
app.use("/api/v1/tv_shows", tvShowRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
  db;
});
