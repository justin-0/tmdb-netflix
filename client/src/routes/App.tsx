import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

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
            <Link to={"/login"}>
              <Button
                variant="outline"
                className="bg-netflix text-white hover:bg-netflix/80 hover:text-white/80"
              >
                Login
              </Button>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
