import HomeAuthPage from "../pages/HomeAuthPage";
import HomePage from "../pages/HomePage";

const user = false;

function App() {
  return <div>{user ? <HomePage /> : <HomeAuthPage />}</div>;
}

export default App;
