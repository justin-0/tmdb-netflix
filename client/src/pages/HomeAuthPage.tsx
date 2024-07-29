import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ChevronRight } from "lucide-react";
import { Separator } from "../components/ui/separator";

function HomeAuthPage() {
  return (
    <div>
      <div className="min-h-[30rem] w-full bg-hero-img md:min-h-[40rem]">
        <header className="px-6 py-3 md:px-24">
          <nav className="flex items-center justify-between">
            <Link to={"/"}>
              <img
                src="/netflix-logo.png"
                alt="neflix company logo"
                className="w-24 md:w-32"
              />
            </Link>
            <div className="hidden md:flex">
              <Link to={"/login"}>
                <Button className="bg-netflix text-white hover:bg-netflix/80 hover:text-white/80">
                  Login
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <Link to={"/login"}>
                <Button
                  size="sm"
                  className="bg-netflix text-white hover:bg-netflix/80 hover:text-white/80"
                >
                  Login
                </Button>
              </Link>
            </div>
          </nav>
        </header>
        <div className="mt-20 md:mt-40">
          <section className="flex flex-col items-center justify-center space-y-4 text-white">
            <h1 className="text-balance text-center text-3xl font-bold md:text-5xl">
              Unlimited films, TV programmes and more
            </h1>
            <p className="text-center text-lg lg:text-2xl">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-balance text-center text-lg lg:text-2xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex w-3/4 flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-2">
              <Input
                className="w-full md:w-[400px]"
                placeholder="Email address"
              />
              <div className="flex items-center justify-center">
                <Button
                  className="bg-netflix font-bold text-white hover:bg-netflix/80 hover:text-white/80 md:text-xl"
                  size="lg"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="flex h-[600px] flex-col items-center justify-center bg-black md:h-[750px]">
        {/* Parent */}
        <div className="mx-auto flex w-4/5 flex-col items-center justify-center gap-y-6 md:w-3/4 md:flex-row md:gap-x-4 md:gap-y-0">
          {/* Content */}
          <div className="flex-1 text-white">
            <h2 className="text-center text-2xl font-bold md:text-left md:text-5xl">
              Enjoy on your TV
            </h2>
            <p className="mt-4 text-center text-lg md:text-left md:text-xl md:font-medium">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          {/* Image */}
          <div className="relative flex-1">
            <img src="/tv.png" className="relative z-20" />
            <video
              className="absolute left-1/2 top-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2"
              autoPlay
            >
              <source src="/hero-vid.mp4" />
            </video>
          </div>
        </div>
      </div>
      <Separator className="h-3 bg-zinc-800" />
      <div className="flex h-[600px] flex-col items-center justify-center bg-black md:h-[750px]">
        {/* Parent */}
        <div className="mx-auto flex w-4/5 flex-col items-center justify-center gap-y-6 md:w-3/4 md:flex-row md:gap-x-4 md:gap-y-0">
          {/* Content */}
          <div className="relative flex-1">
            <img src="/device-pile.png" className="relative z-20 mt-4" />
            <video
              className="absolute left-1/2 top-2 z-10 h-4/6 max-w-[63%] -translate-x-1/2"
              autoPlay
            >
              <source src="/video-devices.mp4" />
            </video>
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-center text-2xl font-bold md:text-left md:text-5xl">
              Watch everywhere
            </h2>
            <p className="mt-4 text-center text-lg md:text-left md:text-xl md:font-medium">
              Stream unlimited films and TV programmes on your phone, tablet,
              laptop and TV.
            </p>
          </div>
          {/* Image */}
        </div>
      </div>
      <Separator className="h-3 bg-zinc-800" />
      <div className="flex h-[600px] flex-col items-center justify-center bg-black md:h-[750px]">
        {/* Parent */}
        <div className="mx-auto flex w-4/5 flex-col items-center justify-center gap-y-6 md:w-3/4 md:flex-row md:gap-x-4 md:gap-y-0">
          {/* Content */}
          <div className="flex-1 text-white">
            <h2 className="text-center text-2xl font-bold md:text-left md:text-5xl">
              Create profiles for children
            </h2>
            <p className="mt-4 text-center text-lg md:text-left md:text-xl md:font-medium">
              Send children on adventures with their favourite characters in a
              space made just for them – free with your membership.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1">
            <img src="/kids.png" />
          </div>
        </div>
      </div>
      <Separator className="h-3 bg-zinc-800" />
      <div className="flex h-[600px] flex-col items-center justify-center bg-black md:h-[750px]">
        {/* Parent */}
        <div className="mx-auto flex w-4/5 flex-col items-center justify-center gap-y-6 md:w-3/4 md:flex-row md:gap-x-4 md:gap-y-0">
          {/* Content */}
          <div className="relative flex-1 outline outline-fuchsia-400">
            <img
              src="/stranger-things-lg.jpg"
              alt="stranger things cover"
              className="mt-4"
            />
            <div className="absolute bottom-5 left-1/2 flex h-20 w-3/4 -translate-x-1/2 items-center gap-2 rounded-md border border-slate-500 bg-black px-2 lg:left-36 lg:w-1/2 lg:-translate-x-0">
              <img
                src="/stranger-things-sm.png"
                alt="image"
                className="h-full"
              />
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col gap-0">
                  <span className="text-md font-bold lg:text-lg">
                    Stranger Things
                  </span>
                  <span className="text-sm text-blue-500">Downloading...</span>
                </div>
                <img
                  src="/download-icon.gif"
                  alt="downloading progress gif icon"
                  className="h-12"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-center text-2xl font-bold md:text-left md:text-5xl">
              Download your programmes to watch offline
            </h2>
            <p className="mt-4 text-center text-lg md:text-left md:text-xl md:font-medium">
              Watch on a plane, train or submarine...
            </p>
          </div>
          {/* Image */}
        </div>
      </div>
    </div>
  );
}

export default HomeAuthPage;
