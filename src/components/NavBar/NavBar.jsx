import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container mx-auto mb-10 px-4">
      <div className="border-b w-full inline-block border-blue-400 py-4 bg-white flex justify-between">
        <NavLink to="/">
          <h1 className="text-2xl font-semibold text-gray-800">
            Rick & Morty <span className="text-blue-500">Wiki</span>
          </h1>
        </NavLink>
        <div className="flex gap-1">
          <a
            href="https://rickandmortyapi.com"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="transition duration-300 ease bg-white hover:bg-slate-100 md:px-6 xl:px-10 lg:px-10 2xl:px-12 px-4
         group-hover:text-white p-2 rounded-md"
            >
              API
            </button>
          </a>
          <a
            href="https://github.com/thenesern/rick-and-morty-api"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="transition duration-300 ease bg-white hover:bg-slate-100  md:px-6 xl:px-10 lg:px-10 2xl:px-12 px-4
         group-hover:text-white p-2 rounded-md"
            >
              Source
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
