import React from 'react'
import logo from '../images/logo.jpg'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-10 gap-8">
        {/* Column 1: Logo and Text */}
        <div className='col-span-5'>
          <img src={logo} className='w-20 rounded-xl' alt="" />
          <p className="mt-4  text-gray-300 font-semibold">
          ByteEdu is committed to providing students with high-quality educational resources and courses designed to enhance learning and skill-building. Our mission is to make education accessible, engaging, and effective, empowering students to achieve their academic and career goals. Explore our platform and discover resources that make a difference in your educational journey.          </p>
        </div>

        {/* Column 2: Company Links */}
        <div className='col-span-2'>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2 flex flex-col">
            <NavLink
            to="/aboutus"
            className="text-gray-300 hover:text-white hover:font-semibold"
            >
              About
            </NavLink>
            <NavLink
            to="/resources"
            className="text-gray-300 hover:text-white hover:font-semibold"
            >
              Resources
            </NavLink>
            <NavLink
            to="/courses"
            className="text-gray-300 hover:text-white hover:font-semibold"
            >
              Courses
            </NavLink>
            <NavLink
            to="/jobs"
            className="text-gray-300 hover:text-white hover:font-semibold"
            >
              jobs
            </NavLink>
            <NavLink
            to="/team"
            className="text-gray-300 hover:text-white hover:font-semibold"
            >
              team
            </NavLink>
            <NavLink
            to="/contacts"
            className="text-gray-300 hover:text-white hover:font-semibold"
            >
              Contacts
            </NavLink>
          </ul>
        </div>

        {/* Column 3: Get In Touch */}
        <div className='col-span-3'>
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-2">
            <strong className="text-white">Contact Us:</strong> +91 8447517306
          </p>
          <p className="text-gray-300">
            <strong className="text-white">Email:</strong> skillbridge14@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer