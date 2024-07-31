import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import NavButtons from "../buttons/nav-buttons";

function MobileNav() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="mr-8 w-56">
          <div className="flex flex-col items-center justify-center gap-3">
            <NavButtons role="movies" />
            <NavButtons role="tv shows" />
            <NavButtons role="history" />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default MobileNav;
