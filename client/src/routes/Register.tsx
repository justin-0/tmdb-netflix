import { Link } from "react-router-dom";
import RegisterForm from "../components/forms/register-form";

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
      <div className="mt-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl text-white md:text-3xl lg:text-4xl">
          Register your account
        </h1>
        <div className="mt-8 rounded-md bg-black/60 px-5 py-5 lg:w-[500px]">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
