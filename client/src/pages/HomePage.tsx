import Navbar from "../components/navbars/auth-nav";

import { useLoaderData, useNavigate } from "react-router-dom";
import useMediaStore from "../store/media-store";
import { useEffect } from "react";
import ContentDisplay from "../components/content";

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

  const data = useLoaderData() as ContentData;
  const navigate = useNavigate();
  console.log(data);

  useEffect(() => {
    navigate("/");
  }, [content]);

  return (
    <div className="relative h-full w-full">
      <Navbar />

      <img
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt="name of file poster"
        className="absolute left-0 top-0 -z-50 h-screen w-full object-cover md:-translate-x-0"
      />

      <div className="absolute left-0 top-0 -z-50 h-screen w-full bg-gradient-to-b from-black to-transparent" />

      <ContentDisplay data={data} content={content} />
    </div>
  );
}

export default HomePage;
