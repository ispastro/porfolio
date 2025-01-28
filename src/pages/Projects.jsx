// Import necessary dependencies and assets

import ProjectCard from "../components/cards/ProjectCard";
import movieApp from "../assets/images/movie-app.png";
import onlineExam from "../assets/images/onlineExam.png";
import todoapp from "../assets/images/todoapp.png";
import {useGitHubRepos} from "../hooks/useGitHubRepos";

function Projects() {
  // Fetch repositories using a custom hook
  const { repos, loading, error } = useGitHubRepos("ispastro");

  // Define featured projects to display
  const featuredProjects = [
    {
      id: 1,
      title: "Movie App",
      description: "A simple React project for practice purposes.",
      image: movieApp,
      githubLink: "https://github.com/ispastro/movie-app",
      technologies: ["React", "Tailwind"],
    },
    {
      id: 2,
      title: "AAU Online Examination System",
      description:
        "A web-based application enabling students to take exams online.",
      image: onlineExam,
      githubLink: "https://github.com/ispastro/AAU-Online-Examination-System",
      technologies: ["React", "Tailwind"],
    },
    {
      id: 3,
      title: "To Do App",
      description:
        "A To-Do app with React, CSS, and Local Storage, offering themes and advanced functionalities.",
      image: todoapp,
      githubLink: "https://github.com/ispastro/To-Do-App",
      technologies: ["React", "CSS", "Local Storage"],
    },
  ];

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Section for featured projects */}
      <section>
        <h1 className="section-title  text-gray-400 ">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      {/* Section for recent GitHub activity */}
      <section>
        <h2 className="text-4xl font-bold text-[#001220] text-gray-200 mb-6">
          Recent  Repos
        </h2>
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400 mb-2">
                  {repo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {repo.description || "No description available"}
                </p>
                {repo.language && (
                  <span className="px-3 py-1 bg-blue-100 dark:bg-[#001220] text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {repo.language}
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Projects;