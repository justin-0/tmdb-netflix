import axios from "axios";
import useMediaStore from "../store/media-store";
import { MovieCategory, TVShowCategory } from "./types/content";

const endpoints = {
  movie: {
    baseUrl: `/api/v1/movie`,
    categories: [
      "now_playing",
      "popular",
      "top_rated",
      "upcoming",
    ] as MovieCategory[],
  },
  tv_shows: {
    baseUrl: `/api/v1/tv_shows`,
    categories: [
      "airing_today",
      "on_the_air",
      "popular",
      "top_rated",
    ] as TVShowCategory[],
  },
};

export async function fetchCategories() {
  const content = useMediaStore.getState().content;
  const { baseUrl, categories } = endpoints[content];

  try {
    const promises = categories.map((category) => {
      return axios.get(`${baseUrl}/${category}`);
    });

    const results = await Promise.all(promises);

    // const categoryData = categories.map((category, index) => ({
    //   [category]: results[index].data.content,
    // }));

    const categoryData = results.map((category) => category.data.content);
    console.log("CATEGORY DATA ", categoryData)

    return categoryData;
  } catch (error) {}
}
