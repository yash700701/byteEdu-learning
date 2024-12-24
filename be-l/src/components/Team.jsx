import React from 'react'
import linkedin from '../icons/linkedin.png'

function Team() {

    const teamMember = [
        {
            image: "https://byte-edu-learning-platform.netlify.app/assets/images/member-02.jpg", // Replace with actual image URL
            name: "Manan Chawla",
            role: "Founder",
            position: "Fullstack Developer",
            linkedin: "https://www.linkedin.com/in/mananchawla26/", // Replace with actual LinkedIn URL
        },
        {
            image: "https://byte-edu-learning-platform.netlify.app/assets/images/member-03.jpg", // Replace with actual image URL
            name: "Manita Rastogi",
            role: "Co-Founder",
            position: "Human Resources",
            linkedin: "https://www.linkedin.com/in/manita-rastogi8447/", // Replace with actual LinkedIn URL
        },
        {
            image: "https://byte-edu-learning-platform.netlify.app/assets/images/member-04.jpg", // Replace with actual image URL
            name: "Asha Kanwar",
            role:"Co-Founder",
            position: "Frontend Developer",
            linkedin: "https://www.linkedin.com/in/ashakanwar21/", // Replace with actual LinkedIn URL
        },
    ]

  return (
    <>
    <div className="mt-28 mx-40 grid sm:grid-cols-3 gap-10 justify-center items-center " >
  {teamMember.map((member, index) => (
    <div
      key={index}
      className="max-w-xl w-60 bg-white rounded-3xl shadow-lg overflow-hidden mx-auto"
    >
      {/* Image Section */}
      <img
        src={member.image}
        alt={`${member.name}'s Profile`}
        className="w-full h-44 object-cover"
      />

      {/* Content Section */}
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
        <p className="text-gray-600">{member.position}</p>

        {/* LinkedIn Button */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2"
        >
          <img src={linkedin} className='w-8' alt="" />
        </a>
      </div>
    </div>
  ))}
</div>

    </>
    
  )
}

export default Team
