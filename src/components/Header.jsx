// import React from "react";
// import { FaSearch } from "react-icons/fa";

// const Header = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full bg-transparent hover:bg-white/80 transition-all duration-300 z-50">
//       <header className="bg-[#003366]/90 hover:bg-[#003366] transition-all duration-300">
//         <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-lobster text-white drop-shadow-lg">
//             TheFantessia
//           </h2>

//           <a className="block text-teal-600" href="#">
//             {/* <img src="perfume-01.avif" alt="perfume pic" height={40} width={80}/> */}
//           </a>

//           <div className="flex flex-1 items-center justify-end md:justify-between">
//             <nav aria-label="Global" className="hidden md:block">
//               <ul className="flex items-center gap-6 text-sm">
//                 <li className="flex items-center gap-2">
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="bg-white p-2 rounded-l-md text-black h-10 "
//                   />
//                   <button className="px-2 bg-[#873B4D] text-white rounded-r-md h-10 w-10 text-xl">
//                     <FaSearch />
//                   </button>
//                 </li>
//                 <li className="flex items-center gap-2 text-white cursor-pointer">
//                   Home
//                 </li>
//                 <li className="flex items-center gap-2 text-white cursor-pointer">
//                   About
//                 </li>
//                 <li className="flex items-center gap-2 text-white cursor-pointer">
//                   Contact
//                 </li>
//                 <li className="flex items-center gap-2 text-white cursor-pointer">
//                   Products
//                 </li>
//               </ul>
//             </nav>

//             <div className="flex items-center gap-4">
//               <div className="sm:flex sm:gap-4">
//                 <a
//                   className="block rounded-md bg-[#9F4C5B] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#B76E79]"
//                   href="#"
//                 >
//                   Login
//                 </a>

//                 <a
//                   className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#9F4C5B] transition hover:text-[#B76E79] sm:block"
//                   href="#"
//                 >
//                   Sign up
//                 </a>
//               </div>

//               <button
//                 className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
//                 type="button"
//               >
//                 <span className="sr-only">Open menu</span>
//                 <svg
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill="currentColor"
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M4 5H16C16.55 5 17 5.45 17 6C17 6.55 16.55 7 16 7H4C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5ZM4 10H16C16.55 10 17 10.45 17 11C17 11.55 16.55 12 16 12H4C3.45 12 3 11.55 3 11C3 10.45 3.45 10 4 10ZM4 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17H4C3.45 17 3 16.55 3 16C3 15.45 3.45 15 4 15Z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent hover:bg-white/80 transition-all duration-300 z-50">
      <header className="bg-[#003366]/90 hover:bg-[#003366] transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-2xl font-lobster text-white drop-shadow-lg">
            TheresinFantasia
          </h2> */}
          <h2 className="text-2xl font-serif text-white tracking-tight drop-shadow-xl">
            TheResinFantasia
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
                  <Link to="/">Home</Link> {/* Replaced <a> with <Link> */}
                </li>
                <li className="flex items-center gap-2 text-white cursor-pointer">
                  <Link to="/about">About</Link>{" "}
                  {/* Replaced <a> with <Link> */}
                </li>
                <li className="flex items-center gap-2 text-white cursor-pointer">
                  <Link to="/contact">Contact</Link>{" "}
                  {/* Replaced <a> with <Link> */}
                </li>
                <li className="flex items-center gap-2 text-white cursor-pointer">
                  <Link to="/product">Product</Link>{" "}
                  {/* Replaced <a> with <Link> */}
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  to="/login" // Use Link to route to the login page
                  className="block rounded-md bg-[#9F4C5B] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#B76E79]"
                >
                  Login
                </Link>

                <Link
                  to="/signup" // Use Link to route to the signup page
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#9F4C5B] transition hover:text-[#B76E79] sm:block"
                >
                  Sign up
                </Link>
              </div>

              {/* Hamburger Menu for Mobile */}
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
        </div>

        {/* Mobile Menu - Displayed when menu is open */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#003366] md:hidden">
            <ul className="flex flex-col items-center gap-6 text-sm text-white py-6">
              <li>
                <Link to="/" className="cursor-pointer" onClick={toggleMenu}>
                  Home
                </Link>{" "}
                {/* Replaced <a> with <Link> */}
              </li>
              <li>
                <Link
                  to="/about"
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  About
                </Link>{" "}
                {/* Replaced <a> with <Link> */}
              </li>
              <li>
                <Link
                  to="/contact"
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>{" "}
                {/* Replaced <a> with <Link> */}
              </li>
              <li>
                <Link
                  to="/product"
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  Product
                </Link>{" "}
                {/* Replaced <a> with <Link> */}
              </li>
              <li>
                <Link
                  to="/login"
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  Login
                </Link>{" "}
                {/* Replaced <a> with <Link> */}
              </li>
              <li>
                <Link
                  to="/signup"
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>{" "}
                {/* Replaced <a> with <Link> */}
              </li>
            </ul>
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={toggleMenu}
            >
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
        )}
      </header>
    </div>
  );
};

export default Header;
