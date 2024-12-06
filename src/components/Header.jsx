import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent hover:bg-white/80 transition-all duration-300 z-50">
      <header className="bg-[#003366]/90 hover:bg-[#003366] transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-white tracking-tight drop-shadow-xl">
            Essencia
          </h2>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-white p-2 rounded-l-md text-black h-10"
                  />
                  <button className="px-2 bg-[#873B4D] text-white rounded-r-md h-10 w-10 text-xl">
                    <FaSearch />
                  </button>
                </li>
                <li className="flex items-center gap-2 text-white cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="flex items-center gap-2 text-white cursor-pointer">
                  <Link to="/about">About</Link>
                </li>
                <li className="flex items-center gap-2 text-white cursor-pointer">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="flex items-center gap-2 text-white cursor-pointer">
                  <Link to="/product">Product</Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!isSignedIn ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    to="/sign-in"
                    className="block rounded-md bg-[#9F4C5B] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#B76E79]"
                  >
                    Login
                  </Link>

                  <Link
                    to="/sign-up"
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#9F4C5B] transition hover:text-[#B76E79] sm:block"
                  >
                    Sign up
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <UserButton />
                  <span className="text-white">{user.fullName}</span>
                </div>
              )}
            </div>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={toggleMenu}
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5H16C16.55 5 17 5.45 17 6C17 6.55 16.55 7 16 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5ZM4 10H16C16.55 10 17 10.45 17 11C17 11.55 16.55 12 16 12H4C3.45 12 3 11.55 3 11C3 10.45 3.45 10 4 10ZM4 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17H4C3.45 17 3 16.55 3 16C3 15.45 3.45 15 4 15Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#003366] md:hidden">
            <ul className="flex flex-col items-center gap-6 text-sm text-white py-6">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={toggleMenu}>
                  Product
                </Link>
              </li>
              {!isSignedIn ? (
                <>
                  <li>
                    <Link to="/sign-in" onClick={toggleMenu}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-up" onClick={toggleMenu}>
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <li onClick={toggleMenu}>
                  <UserButton />
                </li>
              )}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
