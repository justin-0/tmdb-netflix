import Navbar from "../components/navbars/auth-nav";

function HomePage() {
  return (
    <div className="relative h-full w-full">
      <Navbar />

      <img
        src="/extraction.jpg"
        alt="name of file poster"
        className="absolute left-0 top-0 -z-50 h-screen w-full object-cover md:-translate-x-0"
      />

      <div className="absolute left-0 top-0 -z-50 h-screen w-full bg-gradient-to-b from-black to-transparent" />
    </div>
  );
}

export default HomePage;
