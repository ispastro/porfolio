// -----------------------------
// ProjectCard Component
// -----------------------------
import { useState, useEffect } from "react";
import { FaGithub, FaThumbsUp } from "react-icons/fa";

function ProjectCard({ id, title, description, image, githubLink, technologies }) {
  const [likes, setLikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);

  // Load likes and user interaction from localStorage on component mount
  useEffect(() => {
    const projectLikes = JSON.parse(localStorage.getItem("projectLikes") || "{}");
    const userLikes = JSON.parse(localStorage.getItem("userProjectLikes") || "{}");

    if (projectLikes[id]) setLikes(projectLikes[id]);
    if (userLikes[id]) setUserLiked(true);
  }, [id]);

  const handleLike = () => {
    const projectLikes = JSON.parse(localStorage.getItem("projectLikes") || "{}");
    const userLikes = JSON.parse(localStorage.getItem("userProjectLikes") || "{}");

    if (userLiked) {
      setLikes((prev) => prev - 1);
      setUserLiked(false);
      delete userLikes[id];
    } else {
      setLikes((prev) => prev + 1);
      setUserLiked(true);
      userLikes[id] = true;
    }

    projectLikes[id] = likes + (userLiked ? -1 : 1);

    localStorage.setItem("projectLikes", JSON.stringify(projectLikes));
    localStorage.setItem("userProjectLikes", JSON.stringify(userLikes));
  };

  return (
    <div className="card flex flex-col h-full">
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate flex-1">
            {title}
          </h3>
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 transition-colors ${
              userLiked ? "text-red-500" : "text-gray-500 hover:text-green-500"
            }`}
            aria-label="Like project"
          >
            <FaThumbsUp className="w-5 h-5" />
            <span className="text-sm font-medium">{likes}</span>
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-[#001220] text-blue-800 dark:text-blue-200 rounded-full text-sm whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;