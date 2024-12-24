import React from 'react'

function WebDev() {
    const courses = [
        {
          id: 1,
          title: "Beginner Android Development",
          description: "Learn the basics of Android app development using Kotlin.",
          image: "https://itpreneurpune.com/wp-content/uploads/2021/04/Andriod-Course_00000-825x510.jpg",
        },
        {
          id: 2,
          title: "Intermediate Android Development",
          description:
            "Enhance your skills by building more complex Android applications.",
          image: "https://via.placeholder.com/300x200.png?text=Intermediate+Course",
        },
        {
          id: 3,
          title: "Android with Jetpack Compose",
          description:
            "Master modern Android UI design using Jetpack Compose.",
          image: "https://via.placeholder.com/300x200.png?text=Jetpack+Compose",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
        {
          id: 4,
          title: "Advanced Android Development",
          description:
            "Dive deeper into Android internals and build high-performance apps.",
          image: "https://via.placeholder.com/300x200.png?text=Advanced+Course",
        },
      ];
  return (
    <div className="mt-20 min-h-screen p-6">
    <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
      Android Development Courses
    </h1>
    <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
            <p className="text-gray-600 mt-2">{course.description}</p>
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

export default WebDev