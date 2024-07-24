import bcryptjs from "bcryptjs";

export async function hashedPassword(password: string) {
  const saltRounds = 10;
  try {
    const salt = await bcryptjs.genSalt(saltRounds);
    const hash = await bcryptjs.hash(password, salt);
    return hash;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}
