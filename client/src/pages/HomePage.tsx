import { Info, Play } from "lucide-react";
import Navbar from "../components/navbars/auth-nav";
import { Button } from "../components/ui/button";
import { useLoaderData, useNavigate } from "react-router-dom";
import useMediaStore from "../store/media-store";
import { useEffect } from "react";

interface ContentData {
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date: string;
  first_air_data: string;
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
      <div className="mt-52 max-w-2xl px-6 text-white outline md:px-24">
        <div>
          {/* title */}
          <h1 className="text-4xl font-bold md:text-6xl">
            {content === "movie" ? `${data.title}` : `${data.name}`}
          </h1>
          {/* rating */}
          <p className="mt-2 text-sm">{`Rating: ${data.vote_average}`}</p>
          {/* description */}
          <p className="mt-2">{`${data.overview}`}</p>
        </div>
        <div className="mt-4 space-x-6">
          {/* TODO: LINK TO WATCH ID PATH */}
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Play
          </Button>
          {/* TODO: LINK TO MOVIE DETAILS ID PATH */}
          <Button variant="secondary">
            <Info className="mr-2 h-4 w-4" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
