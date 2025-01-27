import React from "react";

import profile from "../../assets/profile.png";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white dark:bg-[#001220]">
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center ">
          {/* Right Side - Profile Picture */}
          <div className="lg:w-1/2 flex justify-center ">
            <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-2xl border-4 border-teal-400 transform hover:scale-105 transition-transform duration-300">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover "
              />
             
            </div>
          </div>

          {/* Left Side - About Me Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-8">
              {/* Heading */}
              <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
                About  <span className="text-teal-400 relative inline-block after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-1 after:bg-teal-400/30">
                  Me
                </span>
              </h2>
            </div>

            {/* Content */}
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi, I’m Haile Asaye, a passionate web developer who loves transforming ideas into reality through
              code. From building responsive layouts to crafting interactive components, I’m always eager to
              learn and create something extraordinary. My journey began with curiosity and quickly evolved into
              a deep passion for web technologies like <span className="text-teal-400 font-semibold">React.js</span> and
              <span className="text-purple-400 font-semibold"> JavaScript</span>.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Beyond the world of <span className="text-teal-400 font-semibold">coding</span>, I lose myself in the vast expanse of the cosmos, diving into the mysteries of <span className="text-purple-400 font-semibold">astronomy</span> and unraveling the profound principles that govern the universe. Exploring the <span className="text-blue-400 font-semibold">physics</span> of celestial bodies fuels my curiosity and reminds me that creativity and innovation are as boundless as the stars themselves.
            </p>

            <blockquote className="text-2xl font-light italic border-l-4 border-purple-500 pl-6 my-8 transform hover:scale-[1.02] transition-transform duration-300">
              <span className="text-purple-400">
                "I believe in continuous growth, collaboration, and the joy of building something that people can
                use and enjoy."
              </span>
            </blockquote>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Let’s connect, collaborate, and create amazing things together!
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a href="mailto:haileasaye51@gmail.com">
                <button
                  type="button"
                  className="group relative px-8 py-3 bg-gradient-to-r from-teal-600 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Let’s Talk
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
