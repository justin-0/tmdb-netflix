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

export async function getMovieIdTrailers(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const data = await consumeTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos`
    );

    res.json({ success: true, content: data.results });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}

export async function getMovieIdDetails(req: Request, res: Response) {
  const { id } = req.params;
  console.log("id ", id);
  try {
    const data = await consumeTMDB(`https://api.themoviedb.org/3/movie/${id}`);
    console.log("received data ", data);
    res.json({ success: true, content: data });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}
