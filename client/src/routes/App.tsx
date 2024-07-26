import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="text-6xl">Hello world!</h1>
      <Outlet />
    </div>
  );
}

export default App;
