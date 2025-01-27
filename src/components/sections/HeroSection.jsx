import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Typewriter from "typewriter-effect";
import handwaving from "../../assets/images/handwaving.png";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-[#001220]">
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start">
              <img
                src={handwaving}
                alt="Hand waving"
                className="w-48 h-48 rounded-full overflow-hidden shadow-lg animate-wave"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
              Hi, I'm Haile Asaye
            </h2>
            <div className="text-2xl md:text-4xl text-[#94a3b8] font-serif font-semibold mt-4 md:mt-6 tracking-wide">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Web Developer",
                    "Front End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <button
                onClick={() => navigate("/projects")}
                className="px-6 py-4 bg-gradient-to-r from-teal-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View My Work
              </button>
             
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex lg:w-1/2 justify-center">
            <DotLottieReact
              src="homeAnimation.lottie"
              loop
              autoplay
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
