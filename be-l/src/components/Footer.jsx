import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and Text */}
        <div>
          <h2 className="text-2xl font-bold">Your Logo</h2>
          <p className="mt-4 text-gray-400">
          ByteEdu is committed to providing students with high-quality educational resources and courses designed to enhance learning and skill-building. Our mission is to make education accessible, engaging, and effective, empowering students to achieve their academic and career goals. Explore our platform and discover resources that make a difference in your educational journey.          </p>
        </div>

        {/* Column 2: Company Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-gray-400 hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/courses" className="text-gray-400 hover:text-white transition">
                Courses
              </a>
            </li>
            <li>
              <a href="/team" className="text-gray-400 hover:text-white transition">
                Team
              </a>
            </li>
            <li>
              <a href="/resources" className="text-gray-400 hover:text-white transition">
                Resources
              </a>
            </li>
            <li>
              <a href="/contact-us" className="text-gray-400 hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Get In Touch */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-400 mb-2">
            <strong className="text-white">Contact Us:</strong> +91 8447517306
          </p>
          <p className="text-gray-400">
            <strong className="text-white">Email:</strong> skillbridge14@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer