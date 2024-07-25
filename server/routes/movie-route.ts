import express from "express";
import {
  getMovieIdDetails,
  getMovieIdTrailers,
  getTrendingMovie,
} from "../controllers/movie-controllers";

const movieRouter = express.Router();

movieRouter.get("/trending", getTrendingMovie);
movieRouter.get("/:id/trailers", getMovieIdTrailers);
movieRouter.get("/:id/details", getMovieIdDetails);

export default movieRouter;
