import React, { useContext, useState } from "react";
import Container from "../../../layouts/Container/Container";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.webp'
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logOut();
  };

  





  return (
    <div className="fixed w-full bg-white z-10 shadow-sm border-b-[1px]">
      <Container>
        <div className="py-4">
          {/* Logo Bar */}
          <div className="flex justify-between items-center px-6">
            <div className="text-gray-600">
              <a href="#">
                <img src={logo} alt="Logo" className="h-8" />
              </a>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-10 items-center">
                <Link to="/">
                  <li>
                    <a className="relative group hover:text-orange-500">
                      Home
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                    </a>
                  </li>
                </Link>
                <li>
                  <a className="relative group hover:text-orange-500" href="#">
                    About
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </li>
                <Link to='/fullcommunity'>
                  <li>
                    <a className="relative group hover:text-orange-500">
                      Community
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                    </a>
                  </li>
                </Link>
                <li>
                  <a className="relative group hover:text-orange-500" href="#">
                    Services
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </li>
               
                {user ? (
                  <Link to="/mycommunity">
                    <li>
                      <a className="relative group hover:text-orange-500">
                        My Community
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                      </a>
                    </li>
                  </Link>
                ) : null}
                {user ? (
                  <li className="cursor-pointer">
                    <a onClick={handleLogout} className="relative group hover:text-orange-500">
                      Logout
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                    </a>
                  </li>
                ) : (
                  <Link to="/login">
                    <li>
                      <a className="relative group hover:text-orange-500">
                        Login
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                      </a>
                    </li>
                  </Link>
                )}
                {user ? (
                  <li className="ml-3">
                    <img
                      src={user.profileURL}
                      alt="Profile"
                      className="h-8 w-8 rounded-full"
                    />
                  </li>
                ) : null}
              </ul>
            </div>
            <button
              onClick={toggleMenu}
              className="block sm:hidden text-gray-600 focus:outline-none focus:text-gray-800"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile and Tablet Menu */}
          <div
            className={`${
              menuOpen ? "h-auto" : "h-0"
            } overflow-hidden mt-4 px-6 sm:hidden transition-all duration-300`}
          >
            <ul className="pb-2">
              <li className="py-2 hover:bg-gray-100">
                <a className="relative group hover:text-orange-500">
                  Home
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                </a>
              </li>
              <li className="py-2 hover:bg-gray-100">
                <a className="relative group hover:text-orange-500" href="#">
                  About
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                </a>
              </li>
              <li className="py-2 hover:bg-gray-100">
                <a className="relative group hover:text-orange-500" href="#">
                  Services
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                </a>
              </li>
              <li className="py-2 hover:bg-gray-100">
                <a className="relative group hover:text-orange-500" href="#">
                  Portfolio
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                </a>
              </li>
              <li className="py-2 hover:bg-gray-100">
                <a className="relative group hover:text-orange-500" href="#">
                  Contact
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                </a>
              </li>
              {/* Conditionally render My Community link */}
              {user ? (
                <li className="py-2 hover:bg-gray-100">
                  <a className="relative group">
                    My Community
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </li>
              ) : null}
              {user ? (
                <li className="cursor-pointer py-2 hover:bg-gray-100">
                  <a className="relative group hover:text-orange-500" onClick={handleLogout}>
                    Logout
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                  </a>
                </li>
              ) : (
                <Link to="/login">
                  <li>
                    <a className="relative group hover:text-orange-500">
                      Login
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                    </a>
                  </li>
                </Link>
              )}
              {user ? (
                <li className="py-2 hover:bg-gray-100">
                  <img
                    src={user.profileImage} // Assuming profileImage is the URL of the profile image
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
