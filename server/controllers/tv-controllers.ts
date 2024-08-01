import { Request, Response } from "express";
import { AxiosError } from "axios";
import { consumeTMDB } from "../lib/tmdb-service";

export async function getTrendingShows(req: Request, res: Response) {
  try {
    const data = await consumeTMDB(
      "https://api.themoviedb.org/3/trending/tv/day"
    );
    const randomShow =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({ success: true, content: randomShow });
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.message.includes("404")) {
        return res.status(404).json({ message: "resource not found" });
      }
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export async function getShowIdTrailers(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const data = await consumeTMDB(
      `https://api.themoviedb.org/3/tv/${id}/videos`
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
export async function getShowIdDetails(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const data = await consumeTMDB(`https://api.themoviedb.org/3/tv/${id}`);
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
export async function getSimilarShows(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const data = await consumeTMDB(
      `https://api.themoviedb.org/3/tv/${id}/similar`
    );
    res.json({ success: true, content: data.results });
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.message.includes("404")) {
        return res.status(404).json({ message: "resource not found" });
      }
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export async function getShowsByCategory(req: Request, res: Response) {
  const { category } = req.params;
  try {
    const data = await consumeTMDB(
      `https://api.themoviedb.org/3/tv/${category}`
    );
    res.json({ success: true, content: data.results });
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.message.includes("404")) {
        return res.status(404).json({ message: "resource not found" });
      }
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
