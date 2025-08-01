import { Link, useNavigate } from "react-router";
import ls from "../utils/ls";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <p className="text-gray-500 text-center">
            Register to your intern dashboard
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ls.set("tyuwey38439fghj");
            navigate("/dashboard");
          }}
          className="space-y-5"
        >
          <div>
            <label className="label" htmlFor="name">
              <span className="label-text font-semibold text-base text-gray-700">
                Name
              </span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full ml-1"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="email">
              <span className="label-text font-semibold text-base text-gray-700">
                Email
              </span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full ml-1"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="password">
              <span className="label-text font-semibold text-base text-gray-700">
                Password
              </span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full ml-1"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="btn w-30 font-bold btn-outline btn-secondary "
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
