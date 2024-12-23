import React from "react";
import { NavLink } from "react-router-dom";
import bg from '../images/bg.jpg'
import logo from '../images/logo.jpg'

const Header = () => {
  return (
    <header className="fixed bg-blue-600 z-10 text-white top-0 w-full backdrop-blur-lg h-16 shadow-md">
        {/* <img src={bg} className="h-16 w-full opacity-90" alt="" /> */}
      <div className="container absolute top-0 mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex gap-2 ">
        <img src={logo} className="w-12  rounded-xl" alt="" />
        <p className="text-2xl font-bold">ByteEdu</p>
        </div>
        <div className="text-2xl font-bold text-blue-500">
          {/* <NavLink to="/">Logo</NavLink> */}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>`
            ${isActive ? "bg-white bg-opacity-20 border-white border font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/;lkjh"
            className={({ isActive }) =>`
            ${isActive ? "border-[1px] backdrop-blur-md border-white font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/cv"
            className={({ isActive }) =>`
            ${isActive ? "border-[1px] backdrop-blur-md border-white font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/xdf"
            className={({ isActive }) =>`
            ${isActive ? "border-[1px] backdrop-blur-md border-white font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/hfhg"
            className={({ isActive }) =>`
            ${isActive ? "border-[1px] backdrop-blur-md border-white font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/ch"
            className={({ isActive }) =>`
            ${isActive ? "border-[1px] backdrop-blur-md border-white font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Team
          </NavLink>
          <NavLink
            to="/jkg"
            className={({ isActive }) =>`
            ${isActive ? "border-[1px] backdrop-blur-md border-white font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Contacts
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="block md:hidden text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
