import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import Lottie from "lottie-react";
import contactAnimation from "../assets/EarthAnimation/animation.json";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 500) {
      setErrors((prev) => ({ ...prev, message: "Message cannot exceed 500 characters." }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.message.length > 500) {
      setErrors((prev) => ({ ...prev, message: "Message cannot exceed 500 characters." }));
      return;
    }
    // Simulate form submission
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  const lottieStyle = {
    height: 400,
    width: 400,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="flex flex-start text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        Get In Touch
      </h1>

      {/* Main container with flex layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                  Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                  Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                  Message (max 500 characters)
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${
                      errors.message ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  ></textarea>
                  <p className="text-right text-gray-500 text-sm">
                    {formData.message.length}/500
                  </p>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="py-3 px-4 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200"
              >
                Send Message
              </button>
            </form>

            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                Message sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                Failed to send message. Please try again.
              </div>
            )}
          </div>
        </div>

        {/* Lottie Animation Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Lottie
            animationData={contactAnimation}
            loop={true}
            autoplay={true}
            style={lottieStyle}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;