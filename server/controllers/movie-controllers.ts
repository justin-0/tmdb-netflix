import { Request, Response } from "express";
import { consumeTMDB } from "../lib/tmdb-service";
import { AxiosError } from "axios";

export async function getTrendingMovie(req: Request, res: Response) {
  try {
    const data = await consumeTMDB(
      "https://api.themoviedb.org/3/trending/movie/day"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({ success: true, content: randomMovie });
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.message.includes("404")) {
        return res.status(404).json({ message: "resource not found" });
      }
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
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
    console.log(err);
    if (err instanceof AxiosError) {
      if (err.message.includes("404")) {
        return res.status(404).json({ message: "resource not found" });
      }
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function getMovieIdDetails(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const data = await consumeTMDB(`https://api.themoviedb.org/3/movie/${id}`);
    res.json({ success: true, content: data });
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.message.includes("404")) {
        return res.status(404).json({ message: "resource not found" });
      }
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
