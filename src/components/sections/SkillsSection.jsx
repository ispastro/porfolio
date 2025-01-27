import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaJava, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiReactrouter } from "react-icons/si";
import SkillCard from "../cards/SkillCard"; // Import SkillCard component

const SkillsSection = () => {
  const skills = [
    { id: 1, name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", progress: 90 },
    { id: 2, name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", progress: 80 },
    { id: 3, name: "JavaScript", icon: <FaJs />, color: "text-yellow-500", progress: 85 },
    { id: 4, name: "GitHub", icon: <FaGithub />, color: "text-gray-500", progress: 75 },
    { id: 5, name: "Java", icon: <FaJava />, color: "text-red-500", progress: 70 },
  ];

  const libraries = [
    { id: 1, name: "React.js", icon: <FaReact />, color: "text-blue-400", progress: 80 },
    { id: 2, name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400", progress: 85 },
    { id: 3, name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500", progress: 75 },
    { id: 4, name: "React Router", icon: <SiReactrouter />, color: "text-red-600", progress: 70 },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-[#001220] text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="flex items-center text-3xl font-bold mb-8 text-left">
          <span className="mr-4">Languages & Tools I Use</span>
          <span className="flex-grow h-[1px] bg-gray-300"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill,index) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              progress={skill.progress}
              index = {index}
            />
          ))}
        </div>

       
        <h2 className="flex items-center text-3xl font-bold mb-8 mt-10 text-left">
          <span className="mr-4">Libraries and Frameworks</span>
          <span className="flex-grow h-[1px] bg-gray-300"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {libraries.map((lib) => (
            <SkillCard
              key={lib.id}
              name={lib.name}
              icon={lib.icon}
              color={lib.color}
              progress={lib.progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
