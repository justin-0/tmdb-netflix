import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen w-full">
      <Outlet />
    </div>
  );
}

export default MainLayout;
