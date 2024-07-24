import express from "express";
import { getTrendingMovie } from "../controllers/movie-controllers";

const movieRouter = express.Router();

movieRouter.get("/trending", getTrendingMovie);

export default movieRouter;
