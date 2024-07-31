import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface NavButtonsProps {
  role: "movies" | "tv shows" | "history";
}

function NavButtons({ role }: NavButtonsProps) {
  if (role === "movies") {
    return (
      <Button>
        <span>Movies</span>
      </Button>
    );
  } else if (role === "tv shows") {
    return (
      <Button>
        <span>TV Shows</span>
      </Button>
    );
  } else {
    return (
      <Button>
        <Link to="/history">
          <span>History</span>
        </Link>
      </Button>
    );
  }
}

export default NavButtons;
