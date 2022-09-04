import Logo from "./icons/FaStickyNote";
import Link from "next/link";
import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    const user = supabase.auth.user();
    setUserLoggedIn(!!user);
  }, []);

  return (
    <div className="navbar shadow-sm fixed top-0 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                strokeWidth=""
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="rounded-none menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52"
          >
            <li>
              {userLoggedIn ? (
                <Link href="/dashboard">
                  <a className="text-gray-600 font-elmessiri">Dashboard</a>
                </Link>
              ) : (
                <Link href="/login">
                  <a className="text-gray-600 font-elmessiri">Login</a>
                </Link>
              )}
            </li>
            <li>
              <a className="text-gray-600 font-elmessiri">Guide</a>
            </li>
            <li>
              <a className="text-gray-600 font-elmessiri">Overview</a>
            </li>
          </ul>
        </div>
        <div className="btn space-x-2 btn-ghost normal-case text-xl">
          <Logo />
          <span className="font-lobster">ANote</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a className="text-gray-600 text-sm font-elmessiri">Guide</a>
          </li>
          <li>
            <a className="text-gray-600 text-sm font-elmessiri">Overview</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-5">
        <div className="border-l-2 border-base-300 space-x-5">
          {userLoggedIn ? (
            <Link href="/dashboard">
              <a className="btn rounded-md text-sm text-gray-700 font-elmessiri hidden md:inline-flex btn-ghost ml-2">
                Dashboard
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a className="btn rounded-md text-gray-700 text-sm font-elmessiri hidden md:inline-flex btn-ghost ml-2">
                Login
              </a>
            </Link>
          )}
          <Link href={userLoggedIn ? "/dashboard" : "/register"}>
            <a className="btn rounded-md text-gray-700 text-sm font-elmessiri">
              Get started
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
