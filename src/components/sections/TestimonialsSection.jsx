import { useState, useEffect } from "react";
import TestimonialCard from "../cards/TestimonialCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Natnaeal from "../../assets/images/Natnaeal.png";
import Angela from "../../assets/images/Angela.png";
import Liya from "../../assets/images/Liya.png";
import Samueal from "../../assets/images/Samueal.png";
import softwareEng from "../../assets/images/softwareEng.png";

const testimonials = [
  {
    name: "Satya Nadella",
    role: "Lead Software Engineer at Microsoft",
    imageUrl: Angela,
    quote: "An exceptional developer who delivers outstanding results consistently.",
  },
  {
    name: "Natnaeal Mekonnen",
    role: "CEO of Horizon Tech Solutions",
    imageUrl: Natnaeal,
    quote: "This developer exceeded expectations with their expertise and dedication, delivering a solution that transformed our ideas into reality. Highly recommended!",
  },
  {
    name: "Mandela Tadesse",
    role: "CTO of Innovatech Solutions",
    imageUrl: softwareEng,
    quote: "One of the most talented developers I've had the pleasure to work with.",
  },
  {
    name: "Marissa Mayer",
    role: "Former CEO at Yahoo",
    imageUrl: Liya,
    quote: "Excellent attention to detail and great design sensibility.",
  },
  {
    name: "Sundar Pichai",
    role: "CEO at Google",
    imageUrl: Samueal,
    quote: "Consistently delivers high-quality code and innovative solutions.",
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-900 via-indigo-900 to-gray-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-full w-[120%] h-[120%] transform rotate-45 scale-150 -translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <h2 className="relative text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
        What People Say
      </h2>

      <div className="relative max-w-5xl mx-auto overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-indigo-700 hover:bg-indigo-600 shadow-lg rounded-full transition-all focus:outline-none z-10"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="w-8 h-8 text-white" />
        </button>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 px-6 transform ${
                index === currentIndex ? "scale-105" : "scale-95 opacity-70"
              } transition-all`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-indigo-700 hover:bg-indigo-600 shadow-lg rounded-full transition-all focus:outline-none z-10"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="relative flex justify-center mt-10 space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-5 h-5 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-125 shadow-md"
                : "bg-gray-500 hover:scale-110"
            }`}
            aria-label={`Navigate to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
