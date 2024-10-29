// import React from 'react'

import { useEffect, useState } from "react";
import { useAuthContext } from "../../contextfolder/AuthContext";
import { FaWindowClose } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { search, getSearch } = useAuthContext();
  const [searchData, setSearchData] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  // useEffect(()=>{
  //   getSearch(searchData)
  // }, [searchData])

  console.log(search);

  const handleSearch = () => {
    if (searchData) {
      getSearch(searchData);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <div className="text-yellow-400 font-extrabold text-xl md:text-2xl  tracking-widest">
            🎬 Movie
          </div>
        </NavLink>

        <div className="hidden md:flex items-center space-x-2 flex-grow max-w-lg mx-auto">
          <select className="bg-gray-700 text-white rounded-lg px-3 py-2 outline-none border border-gray-600">
            <option>All</option>
            <option>Movies</option>
            <option>TV Shows</option>
          </select>
          {/* Navbar..... */}
          <input
            type="text"
            placeholder="Find your movie..."
            className="w-full px-4 py-2 text-gray-900 bg-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-500"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="flex w-28 items-center justify-center px-3 py-2 text-white
        rounded-lg transition duration-300 ease-in-out transform hover:bg-white
         hover:text-black bg-yellow-400  
         hover:scale-105 focus:outline-none"
          >
            <span className="mr-1 ">🔍</span>
            Search
          </button>
        </div>

        <div className="hidden md:flex space-x-4 items-center ml-2  ">
          <a
            href="#"
            className="hover:text-yellow-400 transition duration-200 text-sm md:text-base font-semibold"
          >
            Watchlist
          </a>

          <div className="relative">
            <button
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="hover:text-yellow-400 transition duration-200 text-sm md:text-base font-semibold focus:outline-none"
            >
              Sign In
            </button>
            {isLoginOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-11/12 md:w-1/3 relative">
                  <button
                    onClick={() => setIsLoginOpen(false)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
                    aria-label="Close"
                  >
                    <FaWindowClose className="w-6 h-6 text-gray-600" />
                  </button>
                  <form>
                    <h3 className="text-lg font-bold mb-4 text-center">
                      Sign In
                    </h3>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 mb-4"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 mb-4"
                      placeholder="Password"
                    />
                    <button
                      type="submit"
                      className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#"
              className="block text-center hover:text-yellow-400 transition duration-200 text-base"
            >
              Watchlist
            </a>
            <button
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="block text-center hover:text-yellow-400 transition duration-200 text-base"
            >
              Sign In
            </button>
          </div>

          <div className="flex flex-col mt-4">
            <div className="flex items-center">
              <select className="bg-gray-700 text-white rounded-lg px-4 py-4 border border-gray-600 mr-2">
                <option>All</option>
                <option>Movies</option>
                <option>TV Shows</option>
              </select>

              <input
                type="text"
                placeholder="Find your movie..."
                className="w-full px-4 py-4 text-gray-900 bg-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-500"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleSearch}
                className="flex w-28 items-center justify-center px-3 py-2 text-white hover:bg-white hover:text-black bg-yellow-400 
    rounded-lg transition duration-300 ease-in-out transform
     hover:scale-105 focus:outline-none"
              >
                <span className="mr-1">🔍</span>
                Search
              </button>
            </div>
          </div>

          {/* Mobile Login Form */}
          {isLoginOpen && (
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mt-4 relative">
              <button
                onClick={() => setIsLoginOpen(false)}
                className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
                aria-label="Close"
              >
                <FaWindowClose className="w-6 h-6 text-gray-600" />
              </button>
              <form>
                <h3 className="text-lg font-bold mb-4 text-center">Sign In</h3>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 mb-4"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500 mb-4"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                >
                  Login
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
