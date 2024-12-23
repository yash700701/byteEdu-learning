import React from 'react'

function ContactUs() {
  return (
    <div className="max-w-5xl mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {/* Left Column: Paragraph */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">Feel free to contact us anytime</h1>
        <p className="text-gray-600 pt-8">
        Welcome to ByteEdu! We’re passionate about providing high-quality education and empowering learners worldwide.
        At ByteEdu, you’ll find expertly crafted courses and resources designed to help you succeed in today’s fast-paced, tech-driven world.
        Our commitment is to make learning accessible and impactful.
        If you enjoy our content, please consider sharing ByteEdu with friends and colleagues to help us expand our community of learners.
        </p>
      </div>

      {/* Right Column: Contact Us Form */}
      <div className="bg-white p-6 rounded-3xl border-blue-600 border-[1px] shadow-xl shadow-blue-600">
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs