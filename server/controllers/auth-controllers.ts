import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
  res.send("hello");
}

export async function login(req: Request, res: Response) {
  res.send("hello");
}

export async function logout(req: Request, res: Response) {
  res.send("hello");
}
