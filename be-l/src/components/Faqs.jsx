import React, { useState } from "react";


function Faqs() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
      {
        question: "Where does learning with ByteEdu begin?",
        answer: "At ByteEdu, learning starts with understanding the fundamentals. Our beginner-friendly courses are designed to build a strong foundation, allowing students to progress confidently in their software development and engineering journeys. Each course offers interactive lessons, real-world projects, and expert guidance to make learning both practical and enjoyable.",
      },
      {
        question: "How do we support collaborative learning?",
        answer: "ByteEdu believes that learning is a collaborative journey. Through our community forums, peer discussion groups, and mentorship programs, students can connect, share knowledge, and grow together. Our instructors and support team are always available to provide feedback and answer questions, fostering a supportive and interactive learning environment.",
      },
      {
        question: "Why is ByteEdu the top choice for aspiring developers?",
        answer: "ByteEdu stands out for its industry-aligned curriculum, experienced instructors, and commitment to student success. Our courses are tailored to meet the latest industry standards, ensuring that learners acquire skills that are in demand in today’s tech job market. We also provide portfolio-building projects that showcase your skills to potential employers.",
      },
      {
        question: "How does ByteEdu ensure the best learning experience?",
        answer: "Our team is dedicated to providing a seamless and enriching learning experience. From cutting-edge content to a user-friendly platform, ByteEdu ensures that students can focus on learning without distractions. With regular updates to our course material, and continuous improvements based on student feedback, we guarantee a top-tier educational experience.",
      },
    ];
  
    const toggleAnswer = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index); // Toggle the expanded state
    };
  return (
    <div className="px-6">
      <div className="max-w-6xl mt-20 mx-auto  border-blue-600 border-[1px] shadow-xl shadow-blue-600  rounded-3xl p-6">
     <div className="grid sm:grid-cols-2 gap-8 py-5">
        <div>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index} className="pb-2">
            <div className="flex justify-between  bg-blue-600 p-4 rounded-full items-center">
              <h2 className="text-white font-medium">{faq.question}</h2>
              <button
                onClick={() => toggleAnswer(index)}
                className=" text-2xl font-bold"
              >
                <div className="bg-white rounded-full px-2 text-black">
                {expandedIndex === index ? "-" : "+"}
                </div>
              </button>
            </div>
            {expandedIndex === index && (
              <p className="mt-2 p-4">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
     </div>
     <div className=" ">
     <p className=" py-2 text-blue-600 font-semibold text-xl">Professional Growth</p>
     <p className="py-2 font-bold text-3xl">Why ByteEdu is Your Partner in Professional Growth</p>  
     <p className="py-4 text-gray-600  text-xl">ByteEdu is committed to empowering individuals with the skills and knowledge required for a successful career in software development and engineering. Join us and experience learning with a purpose, guided by experts and crafted for real-world impact</p>   
     </div>
     </div>
    </div>
    </div>
  )
}

export default Faqs