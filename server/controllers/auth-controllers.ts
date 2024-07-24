import { Request, Response } from "express";
import { z } from "zod";
import { User } from "../models/user-model";
import { hashedPassword } from "../lib/passwordhash";

const RegisterSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, {
      message: "Username must be between 3 and 20 characters",
    })
    .max(20, {
      message: "Username must be between 3 and 20 characters",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password must be 8 characters long",
    }),
});

export async function register(req: Request, res: Response) {
  try {
    // Zod parses data to fit schema
    const parsedData = RegisterSchema.safeParse(req.body);
    // Zod error - returns error issues
    if (!parsedData.success) {
      return res.status(400).json({
        success: parsedData.success,
        message: parsedData.error.errors.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),
      });
    }
    // Data is correct and sanitised
    const { email, username, password } = parsedData.data;
    const existingUser = await User.findOne({
      email,
    });
    const existingUsername = await User.findOne({
      username,
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already in use" });
    }

    if (existingUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username is taken" });
    }

    const hashed = await hashedPassword(password);

    const user = new User({
      email,
      username,
      password: hashed,
    });

    await user.save();

    return res.status(201).json({ message: "success" });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      return res.status(400);
    }
  }
}

export async function login(req: Request, res: Response) {
  res.send("hello");
}

export async function logout(req: Request, res: Response) {
  res.send("hello");
}
