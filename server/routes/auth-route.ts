import express from "express";
import { register, login, logout } from "../controllers/auth-controllers";
export const router = express.Router();

router.get("/register", register);
router.post("/login", login);
router.post("/logout", logout);
