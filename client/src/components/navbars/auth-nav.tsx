import { LogOut } from "lucide-react";
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
        {/* LOGO */}
        <div>
          <Link to={"/"}>
            <img
              src="/netflix-logo.png"
              alt="neflix company logo"
              className="w-24 md:w-32"
            />
          </Link>
        </div>
        {/* HISTORY / MOVIES / SHOWS */}
        <div className="hidden items-center justify-center gap-x-6 sm:flex">
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
        {/* HISTORY, LOGOUT */}
        {/* TODO: MOBILE NAV COMPONENT */}
        <div>
          <div className="item-center flex justify-between gap-x-4">
            <div>
              <Button size="icon" onClick={logout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
            <div className="sm:hidden">
              {/* MOBILE NAV HERE */}
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
