import { Request, Response } from "express";
import { consumeTMDB } from "../lib/tmdb-service";
import { User } from "../models/user-model";

export async function getActorSearchResults(req: Request, res: Response) {
  const { query } = req.params;
  try {
    const data = await consumeTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (data.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].profile_path,
          title: data.results[0].name,
          query: "person",
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: data.results });
  } catch (error) {}
}

export async function getMovieSearchResults(req: Request, res: Response) {
  const { query } = req.params;
  try {
    const data = await consumeTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (data.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].title,
          query: "movie",
          createdAt: Date.now(),
        },
      },
    });

    res.status(200).json({ success: true, content: data.results });
  } catch (error) {}
}

export async function getTvSearchResults(req: Request, res: Response) {
  const { query } = req.params;
  try {
    const data = await consumeTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (data.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data.results[0].id,
          image: data.results[0].poster_path,
          title: data.results[0].name,
          query: "tv",
          createdAt: Date.now(),
        },
      },
    });

    res.status(200).json({ success: true, content: data.results });
  } catch (error) {}
}

export async function getUserHistory(req: Request, res: Response) {
  try {
    const user = await User.findById(req.user._id);
    const history = user?.searchHistory;

    if (history?.length === 0) {
      return res.status(404).send(null);
    }

    res.status(200).json({ content: user?.searchHistory });
  } catch (error) {}
}
export async function deleteUserHistoryItem(req: Request, res: Response) {
  // Convert string to number otherwise will not delete
  const id = parseInt(req.params.id);

  try {
    await User.findOneAndUpdate(req.user._id, {
      $pull: {
        searchHistory: { id },
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {}
}
