import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ChevronRight } from "lucide-react";

function App() {
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
    </div>
  );
}

export default App;
