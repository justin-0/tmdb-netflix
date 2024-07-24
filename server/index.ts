import express from "express";
import { router as authRouter } from "./routes/auth-route";
import { db } from "./lib/db";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// CSRF Protection
app.use((req, res, next) => {
  if (req.method === "GET") {
    next();
  }
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

app.listen(5000, () => {
  console.log("Server running on port 5000");
  db;
});
