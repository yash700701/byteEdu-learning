import React from 'react'

function ChooseUs() {
  return (
    <div className="max-w-7xl mt-20 mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Why Choose Us
      </h1>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Comprehensive Learning Resources</h2>
          <p className="text-gray-600">
          ByteEdu offers extensive courses and detailed notes in coding and development, catering to learners at all levels.          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Top-Quality IT Services</h2>
          <p className="text-gray-600">
          We provide exceptional IT services, ensuring a seamless and supportive learning environment.          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-white p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Commitment to Innovation</h2>
          <p className="text-gray-600">
          ByteEdu is dedicated to fostering growth and creativity, helping you stay ahead in the ever-evolving tech industry.          </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs