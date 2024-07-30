import HomeAuthPage from "../pages/HomeAuthPage";
import HomePage from "../pages/HomePage";
import useAuthStore from "../store/auth-store";

function App() {
  const { user } = useAuthStore();

  return <div>{user ? <HomePage /> : <HomeAuthPage />}</div>;
}

export default App;
