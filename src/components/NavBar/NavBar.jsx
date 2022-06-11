import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container mx-auto mb-10 px-4">
      <div className="border-b w-full inline-block border-blue-400 py-8 bg-white flex justify-between">
        <NavLink to="/">
          <h1 className="text-2xl font-semibold text-gray-800">
            Rick & Morty <span className="text-blue-500">Wiki</span>
          </h1>
        </NavLink>
        <div className="flex gap-2">
          <a
            href="https://rickandmortyapi.com"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="transition duration-300 ease bg-white hover:bg-slate-100 px-10
         group-hover:text-white p-2 rounded-md"
            >
              API
            </button>
          </a>
          <a
            href="https://github.com/thenesern"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="transition duration-300 ease bg-white hover:bg-slate-100 px-10
         group-hover:text-white p-2 rounded-md"
            >
              Author
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
