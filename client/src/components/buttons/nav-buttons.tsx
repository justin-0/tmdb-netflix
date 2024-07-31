import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import useMediaStore from "../../store/media-store";

interface NavButtonsProps {
  role: "movies" | "tv shows" | "history";
}

function NavButtons({ role }: NavButtonsProps) {
  const { setContent, content } = useMediaStore();
  console.log("Current content value: ", content);
  if (role === "movies") {
    return (
      <Button variant="ghost" onClick={() => setContent("movies")}>
        <span>Movies</span>
      </Button>
    );
  } else if (role === "tv shows") {
    return (
      <Button variant="ghost" onClick={() => setContent("tv")}>
        <span>TV Shows</span>
      </Button>
    );
  } else {
    return (
      <Button variant="ghost">
        <Link to="/history">
          <span>History</span>
        </Link>
      </Button>
    );
  }
}

export default NavButtons;
