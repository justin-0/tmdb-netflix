import { Button } from "../components/ui/button";
import useAuthStore from "../store/auth-store";

function HomePage() {
  const { logout } = useAuthStore();
  return (
    <>
      <h1>Auth Page</h1>
      <Button
        onClick={logout}
        className="bg-netflix text-white hover:bg-netflix/80 hover:text-white/80"
      >
        Logout
      </Button>
    </>
  );
}

export default HomePage;
