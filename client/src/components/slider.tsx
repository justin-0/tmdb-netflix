import { ContentData } from "../pages/HomePage";

type SliderProps = {
  data: ContentData[];
};

function Slider({ data }: SliderProps) {
  return (
    <div>
      {data.map((d) => (
        <h1 className="text-white">{d.title || d.name}</h1>
      ))}
    </div>
  );
}

export default Slider;
