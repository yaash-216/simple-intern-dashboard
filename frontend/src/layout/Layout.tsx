import { Outlet, Link } from "react-router";
import { useEffect } from "react";
import type { Linkinterface } from "../types";
import ls from "../utils/ls";
export default function Layout() {
  const links: Linkinterface[] = [
    { to: "/", label: "Dashboard" },
    { to: "/leaderboard", label: "leaderboard" },
  ];
  useEffect(() => {
    const token = ls.get();
    if (!token) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="navbar  bg-gray-100 shadow-md px-4">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold text-primary">
            Intern Dashboard
          </Link>
        </div>
        <div className="flex-none text-black hidden md:flex gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:underline
            hover:font-bold  transition-all  underline-offset-4 decoration-2 decoration-red-500"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-primary btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
          >
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:underline font-bold underline-offset-4 decoration-red-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
}
