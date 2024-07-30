import express from "express";
import {
  register,
  login,
  logout,
  authCheck,
} from "../controllers/auth-controllers";
import { isAuthorised } from "../middleware/is-authorised";
export const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/authCheck", isAuthorised, authCheck);
