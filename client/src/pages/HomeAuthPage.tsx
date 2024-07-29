import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ChevronRight } from "lucide-react";

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
        <div className="mx-auto flex w-4/5 flex-col items-center justify-center gap-y-6 outline outline-red-600 md:w-3/4 md:flex-row md:gap-x-4 md:gap-y-0">
          {/* Content */}
          <div className="text-white outline outline-blue-600">
            <h2 className="text-center text-2xl font-bold md:text-left md:text-5xl">
              Enjoy on your TV
            </h2>
            <p className="mt-4 text-center text-lg md:text-left md:text-xl md:font-medium">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          {/* Image */}
          <div>
            <img src="/tv.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAuthPage;
