import express from "express";
import {
  deleteUserHistoryItem,
  getActorSearchResults,
  getMovieSearchResults,
  getTvSearchResults,
  getUserHistory,
} from "../controllers/search-controllers";

const searchRouter = express.Router();

searchRouter.get("/person/:query", getActorSearchResults);
searchRouter.get("/movie/:query", getMovieSearchResults);
searchRouter.get("/tv/:query", getTvSearchResults);
searchRouter.get("/history", getUserHistory);
searchRouter.delete("/history/:id", deleteUserHistoryItem);

export default searchRouter;
