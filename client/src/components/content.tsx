import { Info, Play } from "lucide-react";
import { Button } from "./ui/button";
import { ContentData } from "../pages/HomePage";
import { Link } from "react-router-dom";

type ContentDisplayProps = {
  data: ContentData;
  content: "movie" | "tv_shows";
};

function ContentDisplay({ data, content }: ContentDisplayProps) {
  return (
    <div className="mt-52 max-w-4xl px-6 text-white md:pl-24 lg:pl-60">
      <div className="md:w-2/3 lg:w-3/4">
        <h1 className="text-4xl font-bold md:text-6xl">
          {content === "movie" ? data.title : data.name}
        </h1>
        <p className="mt-2 text-sm">{`${data.release_date?.split("-")[0] || data.first_air_date?.split("-")[0]}`}</p>
        <p className="mt-2 text-sm">{data.overview}</p>
      </div>
      <div className="mt-4 w-full space-x-6">
        <Link to={`/watch/${data.id}`}>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Play
          </Button>
        </Link>
        <Link to={`/details/${data.id}`}>
          <Button variant="secondary">
            <Info className="mr-2 h-4 w-4" />
            More Info
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ContentDisplay;
