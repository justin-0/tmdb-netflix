import { Request, Response } from "express";
import { consumeTMDB } from "../lib/tmdb-service";

export async function getTrendingMovie(req: Request, res: Response) {
  try {
    const data = await consumeTMDB(
      "https://api.themoviedb.org/3/trending/movie/day"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({ success: true, content: randomMovie });
  } catch (error) {
    console.error("Error in getTrendingMovie:", error);
  }
}
