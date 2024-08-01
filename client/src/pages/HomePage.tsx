import Navbar from "../components/navbars/auth-nav";
import { MOVIE_CATEGORIES, TV_CATEGORIES } from "../lib/constants/const";
import { useLoaderData, useNavigate } from "react-router-dom";
import useMediaStore from "../store/media-store";
import { useEffect, useState } from "react";
import ContentDisplay from "../components/content";
import { fetchCategories } from "../lib/fetch-categories";
import Slider from "../components/slider";

export interface ContentData {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  first_air_date: string;
  name: string;
}

function HomePage() {
  const { content } = useMediaStore();
  const [categories, setData] = useState<Array<any>>();

  const data = useLoaderData() as ContentData;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const categories = await fetchCategories();
        setData(categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchAndSetData();
    navigate("/");
  }, [content]);

  if (!data) {
    return null;
  }
  console.log(categories);
  return (
    <>
      <div className="relative h-screen w-full">
        <Navbar />

        <img
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt="name of file poster"
          className="absolute left-0 top-0 -z-50 h-full w-full object-cover"
        />

        <div className="absolute left-0 top-0 -z-50 h-screen w-full bg-gradient-to-b from-black to-transparent" />

        <ContentDisplay data={data} content={content} />
      </div>
      <div className="flex flex-col gap-10 bg-black py-10">
        {categories?.map((cat, index) => (
          <Slider
            data={cat}
            title={
              content === "movie"
                ? MOVIE_CATEGORIES[index]
                : TV_CATEGORIES[index]
            }
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
