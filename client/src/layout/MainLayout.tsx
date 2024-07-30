import { Outlet } from "react-router-dom";
import { Toaster } from "../components/ui/sonner";

function MainLayout() {
  return (
    <div className="min-h-screen w-full">
      <Outlet />
      <Toaster richColors />
    </div>
  );
}

export default MainLayout;
