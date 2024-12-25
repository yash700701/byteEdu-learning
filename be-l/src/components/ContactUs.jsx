import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [resultMessage, setResultMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResultMessage("Please wait...");

    const payload = {
      access_key: "7cd845a5-7594-4f19-bece-c71438a13762",
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 200) {
        setResultMessage("Message sent successfully!");
      } else {
        setResultMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResultMessage("Something went wrong!");
    } finally {
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setResultMessage(""), 3000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column: Paragraph */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Feel free to contact us anytime
        </h1>
        <p className="text-gray-600 pt-8">
          Welcome to ByteEdu! We’re passionate about providing high-quality
          education and empowering learners worldwide. At ByteEdu, you’ll find
          expertly crafted courses and resources designed to help you succeed
          in today’s fast-paced, tech-driven world. Our commitment is to make
          learning accessible and impactful.
        </p>
      </div>

      {/* Right Column: Contact Us Form */}
      <div className="bg-white p-6 rounded-3xl border-blue-600 border-[1px] shadow-xl shadow-blue-600">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
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
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Your Message"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>

          {/* Result Message */}
          <div className="text-center text-gray-700 mt-4">{resultMessage}</div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
