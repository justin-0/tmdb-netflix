import { Outlet } from "react-router-dom";
import { Toaster } from "../components/ui/sonner";
import useAuthStore from "../store/auth-store";
import { useEffect } from "react";

function MainLayout() {
  const { isAuth } = useAuthStore();

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Outlet />
      <Toaster richColors />
    </div>
  );
}

export default MainLayout;
