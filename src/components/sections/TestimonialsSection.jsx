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
    role: " CEO of Horizon Tech Solutions",
    imageUrl: Natnaeal,
    quote: "This developer exceeded expectations with their expertise and dedication, delivering a solution that transformed our ideas into reality. Highly recommended!"
  },
  {
    name: "— Mandela Tadesse",
    role: "—CTO of Innovatech Solutions",
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

  const handlePrevious = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Testimonials
      </h2>
      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:scale-110 transition-all focus:outline-none dark:bg-gray-800"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full hover:scale-110 transition-all focus:outline-none dark:bg-gray-800"
          aria-label="Next testimonial"
        >
          <FiChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex
                ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
            }`}
            aria-label={`Navigate to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
