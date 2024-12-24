import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from '../icons/menu.png'
import logo from '../images/logo.jpg'

const Header = () => {

   const [visible, setVisible] = useState(false)
   const toggleMenu = ()=>{
    if(visible){
      const sidebar = document.querySelector("#menu");
      sidebar.style.display = "none";
      setVisible(false)
    }else{
      const sidebar = document.querySelector("#menu");
      sidebar.style.display = "flex";
      setVisible(true)
    }
   
   }
  
  return (
    <header className="fixed bg-blue-600 z-10 text-white top-0 w-full h-16 shadow-md">
        {/* <img src={bg} className="h-16 w-full opacity-90" alt="" /> */}
      <div className="container absolute top-0 mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <div className="flex gap-4 ">
        <img src={logo} className="w-12  rounded-xl" alt="" />
        <p className="text-2xl sm:text-3xl align-middle pt-2 font-bold">BYTEEDU</p>
        </div>
        <div className="text-2xl font-bold text-blue-500">
          {/* <NavLink to="/">Logo</NavLink> */}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>`
            ${isActive ? "bg-white bg-opacity-20  font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>`
            ${isActive ? "bg-white bg-opacity-20  font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>`
            ${isActive ?  "bg-white bg-opacity-20  font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>`
            ${isActive ?  "bg-white bg-opacity-20  font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>`
            ${isActive ? "bg-white bg-opacity-20  font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>`
            ${isActive ?  "bg-white bg-opacity-20  font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Team
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>`
            ${isActive ? "bg-white bg-opacity-20  font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
          >
            Contacts
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}


       <div>
       <button onClick={toggleMenu} className="block md:hidden text-gray-700 focus:outline-none">
          <img src={menu} className="w-10" alt="" />
        </button>
       </div>
      </div>
      <div id="menu" className="absolute right-5 flex flex-col bg-white text-black opacity-90  top-20 p-5 rounded-xl" style={{display: "none"}}>
      <NavLink
            to="/"
            className={({ isActive }) =>`
            ${isActive ? "bg-blue-600 bg-opacity-20 font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>`
            ${isActive ?"bg-blue-600 bg-opacity-20 font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) =>`
            ${isActive ?"bg-blue-600 bg-opacity-20 font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
            onClick={toggleMenu}
          >
            Resources
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>`
            ${isActive ? "bg-blue-600 bg-opacity-20 font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
            onClick={toggleMenu}
          >
            Courses
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>`
            ${isActive ?"bg-blue-600 bg-opacity-20 font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
            onClick={toggleMenu}
          >
            Jobs
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>`
            ${isActive ? "bg-blue-600 bg-opacity-20 font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
            onClick={toggleMenu}
          >
            Team
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>`
            ${isActive ? "bg-blue-600 bg-opacity-20 font-semibold" : ""}
            px-2 py-1 rounded-lg
            `
            }
            onClick={toggleMenu}
          >
            Contacts
          </NavLink>
      </div>
    </header>
  );
};

export default Header;
