import { Link } from "react-router-dom";
import { ContentData } from "../pages/HomePage";
import { useRef } from "react";

type SliderProps = {
  data: ContentData[];
  title: string;
};

function Slider({ data, title }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-black px-5 text-white md:px-20">
      <h2 className="mb-4 text-xl font-bold md:text-2xl">{title}</h2>
      <div
        className="scrollbar-hide flex space-x-4 overflow-x-scroll"
        ref={sliderRef}
      >
        {data.map((d) => (
          <Link
            to={`/watch/${d.id}`}
            className="group relative min-w-[250px]"
            key={d.id}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500/${d.backdrop_path}`}
                alt="Movie image"
                className="transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
            </div>
            <p className="mt-2 text-center">{d.title || d.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Slider;
