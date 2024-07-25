import express from "express";
import {
  getShowIdDetails,
  getShowIdTrailers,
  getShowsByCategory,
  getSimilarShows,
  getTrendingShows,
} from "../controllers/tv-controllers";

export const tvShowRouter = express.Router();

tvShowRouter.get("/trending", getTrendingShows);
tvShowRouter.get("/:id/trailers", getShowIdTrailers);
tvShowRouter.get("/:id/details", getShowIdDetails);
tvShowRouter.get("/:id/similar", getSimilarShows);
tvShowRouter.get("/:category", getShowsByCategory);
