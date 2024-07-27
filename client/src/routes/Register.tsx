import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="h-screen w-full bg-hero-img">
      <header className="px-6 py-3 md:px-24">
        <nav className="flex items-center justify-between">
          <Link to={"/"}>
            <img
              src="/netflix-logo.png"
              alt="neflix company logo"
              className="w-24 md:w-32"
            />
          </Link>
        </nav>
      </header>
      {/* TODO: DIV WITH TITLE TO REIGSTER AND FORM */}
      <div className="mt-32 flex flex-col items-center justify-center space-x-8 outline outline-white">
        <h1 className="text-2xl text-white">Register your account</h1>
        <div>
          {/* FORM HERE */}
          form
        </div>
      </div>
    </div>
  );
}

export default Register;
