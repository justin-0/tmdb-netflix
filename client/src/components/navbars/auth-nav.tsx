import { LogOut, Search } from "lucide-react";
import { Link } from "react-router-dom";
import NavButtons from "../buttons/nav-buttons";
import { Button } from "../ui/button";
import useAuthStore from "../../store/auth-store";
import MobileNav from "./mobile-nav";

function Navbar() {
  const { logout } = useAuthStore();

  return (
    <header className="px-6 py-3 md:px-24">
      <nav className="flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img
              src="/netflix-logo.png"
              alt="neflix company logo"
              className="w-24 md:w-32"
            />
          </Link>
        </div>
        <div className="hidden items-center justify-center gap-x-6 text-white sm:flex">
          <div>
            <NavButtons role="movies" />
          </div>
          <div>
            <NavButtons role="tv shows" />
          </div>
          <div>
            <NavButtons role="history" />
          </div>
        </div>
        <div>
          <div className="item-center flex justify-between gap-x-4">
            <div className="flex items-center justify-center gap-x-2 sm:gap-x-5">
              <Button size="icon">
                <Link to="/search">
                  <Search className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="icon" onClick={logout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
            <div className="sm:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
