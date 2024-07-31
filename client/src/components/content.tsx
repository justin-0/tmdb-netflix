import { Info, Play } from "lucide-react";
import { Button } from "./ui/button";
import { ContentData } from "../pages/HomePage";

type ContentDisplayProps = {
  data: ContentData;
  content: "movie" | "tv_shows";
};

function ContentDisplay({ data, content }: ContentDisplayProps) {
  return (
    <div className="mt-52 max-w-2xl px-6 text-white outline md:px-24">
      <div>
        <h1 className="text-4xl font-bold md:text-6xl">
          {content === "movie" ? data.title : data.name}
        </h1>
        <p className="mt-2 text-sm">{`Rating: ${data.vote_average}`}</p>
        <p className="mt-2">{data.overview}</p>
      </div>
      <div className="mt-4 space-x-6">
        <Button>
          <Play className="mr-2 h-4 w-4" />
          Play
        </Button>
        <Button variant="secondary">
          <Info className="mr-2 h-4 w-4" />
          More Info
        </Button>
      </div>
    </div>
  );
}

export default ContentDisplay;
