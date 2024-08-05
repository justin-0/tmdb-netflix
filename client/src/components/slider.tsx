import { Link } from "react-router-dom";
import { ContentData } from "../pages/HomePage";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderProps = {
  data: ContentData[] | undefined;
  title?: string;
};

function Slider({ data, title }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [controls, setControls] = useState(false);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
      console.log(-sliderRef.current.offsetWidth);
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
      console.log(sliderRef.current.offsetWidth);
    }
  };

  if (!data) {
    return null;
  }

  return (
    <div className="relative bg-black px-5 text-white md:px-20">
      <h2 className="mb-4 text-xl font-bold md:text-2xl">{title}</h2>
      <div
        className="flex space-x-4 overflow-x-scroll scrollbar-hide"
        ref={sliderRef}
        onMouseEnter={() => setControls(true)}
        onMouseLeave={() => setControls(false)}
      >
        {data.map((d) => (
          <Link
            to={`/watch/${d.id}`}
            className="group relative min-w-[250px]"
            key={d.id}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={
                  d.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${d.backdrop_path}`
                    : `https://placehold.jp/310x174.png`
                }
                alt="Movie image"
                className="transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
            </div>
            <p className="mt-2 text-center">{d.title || d.name}</p>
          </Link>
        ))}
        {controls && (
          <>
            <Button
              size="icon"
              onClick={scrollLeft}
              className="absolute left-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-50 text-white transition hover:bg-opacity-75 md:left-24"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              onClick={scrollRight}
              className="transiton absolute right-5 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 md:right-24"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Slider;
