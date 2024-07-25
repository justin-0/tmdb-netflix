import express from "express";
import {
  getMovieIdDetails,
  getMovieIdTrailers,
  getMoviesByCategory,
  getSimilarMovies,
  getTrendingMovie,
} from "../controllers/movie-controllers";

const movieRouter = express.Router();

movieRouter.get("/trending", getTrendingMovie);
movieRouter.get("/:id/trailers", getMovieIdTrailers);
movieRouter.get("/:id/details", getMovieIdDetails);
movieRouter.get("/:id/similar", getSimilarMovies);
movieRouter.get("/:category", getMoviesByCategory);

export default movieRouter;
