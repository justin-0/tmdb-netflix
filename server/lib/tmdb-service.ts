import axios from "axios";
import "dotenv/config";

export const consumeTMDB = async (url: string) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.TMDB_TOKEN,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error("Unable to fetch data from TMDB" + response.statusText);
  }
  const data = response.data;
  return data;
};
