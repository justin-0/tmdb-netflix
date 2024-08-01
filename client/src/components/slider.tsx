import { ContentData } from "../pages/HomePage";

type SliderProps = {
  data: ContentData[];
  title: string;
};

function Slider({ data, title }: SliderProps) {
  return (
    <div className="relative bg-black px-5 text-white md:px-20">
      <h1>{title}</h1>
      {data.map((d) => (
        <>
          {/* <h1>{title}</h1> */}
          <h2 className="text-white">{d.title || d.name}</h2>
        </>
      ))}
    </div>
  );
}

export default Slider;
