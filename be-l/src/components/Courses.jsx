import React from 'react'

function Courses() {

  const courses = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4IQQXbqds0JGd6wdDFxGFpHt9HSVr56mBQ&s",
      title: "Android Development Course",
    },
    {
      image: "https://www.creativeitinstitute.com/images/course/course_1663052056.jpg",
      title: "Web Development Course",
    },
    {
      image: "https://www.learnatrise.in/wp-content/uploads/2019/06/Data-Analytics-Training-featured-image.png",
      title: "Data Analytics Course",
    },
    {
      image: "https://cdn.springpeople.com/media/python%20logo.png",
      title: "Python Course",
    },
    {
      image: "https://b2bcampus.com/wp-content/uploads/2023/06/Group-79182-2-2.png",
      title: "Full Stack Course",
    },
    {
      image: "https://nietm.in/wp-content/uploads/2022/12/AI3.png",
      title: "AI & ML Course",
    },
  ];

  return (
    <div className="max-w-7xl mt-20 mx-auto p-6">
    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
      Explore Our Courses
    </h1>
    <div className="grid grid-cols-1  mt-16 sm:grid-cols-2 lg:grid-cols-3 mx-16 gap-10">
      {courses.map((course, index) => (
        <div key={index} className="bg-white rounded-3xl shadow-md overflow-hidden">
        {/* Course Image */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover"
        />
  
        {/* Course Content */}
        <div className="p-4 text-center">
          <h2 className="text-lg font-bold text-gray-800">{course.title}</h2>
          <button
            onClick={() => alert(`Explore ${course.title}`)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Explore
          </button>
        </div>
      </div>
      ))}
    </div>
  </div>
  )
}

export default Courses