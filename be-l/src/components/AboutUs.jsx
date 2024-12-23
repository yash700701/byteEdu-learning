import React from "react";
import bg from '../images/bg.jpg'

const AboutUs = () => {
  return (
   <div>

    
     <div className="relative mt-28 max-w-6xl mx-auto  rounded-3xl border-blue-600 border-[1px] shadow-xl shadow-blue-600 p-6 overflow-hidden">
        
        {/* Logo Section */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-4">
          <img
            src="" // Replace with your logo URL
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
  
        {/* Card Content */}
        <div className="mt-16 text-center">
          {/* Title */}
          <h2 className="text-2xl font-bold">About Us</h2>
  
          {/* Paragraph */}
          <p className="mt-4 px-16 ">
          Established in 2024, ByteEdu is a premier educational website dedicated to empowering learners with top-notch resources in coding and development. ByteEdu offers an extensive range of courses and comprehensive notes designed to cater to both beginners and advanced students. Beyond education, ByteEdu extends its expertise by providing high-quality IT services, ensuring a seamless learning and professional experience. ByteEdu's commitment to excellence and innovation makes it a go-to platform for anyone seeking to enhance their skills and knowledge in the ever-evolving tech industry. Experience the future of education with ByteEdu, where learning meets technology.
          </p>
  
          {/* Mission */}
          <div className="mt-6 bg-white text-blue-600 rounded-3xl p-4 shadow-inner">
            <h3 className="font-semibold">Our Mission</h3>
            <p className="text-xs mt-2">
            ByteEdu's mission is to empower learners with top-notch coding and development resources, fostering growth and creativity. We provide accessible education and IT services to thrive in the digital age.
            </p>
          </div>
  
          {/* Explore Button */}
          <button
            onClick={() => alert("Explore more!")}
            className="mt-6 px-6 py-2 bg-white text-indigo-500 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition duration-300"
          >
            Explore
          </button>
        </div>
      </div>
   </div>
  );
};

export default AboutUs;
