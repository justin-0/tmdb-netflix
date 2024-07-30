import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/forms/register-form";
import useAuthStore from "../store/auth-store";

function Register() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  if (user) {
    navigate("/");
  }

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
      <div className="mt-24 flex w-full items-center justify-center">
        <div className="flex w-80 flex-col items-center justify-center bg-black/60 py-8 sm:w-[500px]">
          <h1 className="text-2xl text-white md:text-3xl lg:text-4xl">
            Register your account
          </h1>
          <div className="mt-8 rounded-md px-5 md:w-4/5">
            <RegisterForm />
          </div>
          <div>
            <Link to="/login">
              <p className="mt-4 text-left text-white/80">
                Already a member? <span className="text-netflix">Login</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
