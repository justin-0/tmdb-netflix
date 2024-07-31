import { Info, Play } from "lucide-react";
import Navbar from "../components/navbars/auth-nav";
import { Button } from "../components/ui/button";

function HomePage() {
  return (
    <div className="relative h-full w-full">
      <Navbar />

      <img
        src="/extraction.jpg"
        alt="name of file poster"
        className="absolute left-0 top-0 -z-50 h-screen w-full object-cover md:-translate-x-0"
      />

      <div className="absolute left-0 top-0 -z-50 h-screen w-full bg-gradient-to-b from-black to-transparent" />
      <div className="mt-52 max-w-2xl px-6 text-white outline md:px-24">
        <div>
          {/* title */}
          <h1 className="text-4xl font-bold md:text-6xl">Extraction</h1>
          {/* rating */}
          <p className="mt-2 text-sm">18+ | 2014</p>
          {/* description */}
          <p className="mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, officiis.
          </p>
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
