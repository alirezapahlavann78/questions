import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigation, NavigationItem } from "../../Data/header";

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <nav className="bg-white absolute  inset-x-0 top-0">
      <div className=" px-4 sm:px-6  lg:px-12">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white bg-secondary focus:outline-none  focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
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
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* <!-- Desktop  menu  --> */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 lg:mt-2 md:mt-2"></div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                {navigation.map(({ href, title } : NavigationItem , index) => (
                  <Link
                    to={href}
                    key={index}
                    className="px-3 mx-1 py-2 rounded-md text-base  hover:text-white  hover:bg-secondary font-medium leading-5 text-gray-800 focus:outline-none focus:text-white focus:bg-secondary transition duration-150 ease-in-out"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="text-gray-800">LOGO</div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu --> */}
      {openMobileMenu && (
        <div className="sm:hidden absolute  bg-white z-50 w-full block">
          <div className="px-2 pt-2 pb-3">
            {navigation.map(({ href, title } : NavigationItem) => (
              <Link
                to={href}
                key={title}
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium  hover:text-white hover:bg-secondary focus:outline-none  focus:bg-secondary transition duration-150 ease-in-out"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
