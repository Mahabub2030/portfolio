import Nike from '../assets/Nike.png'
import Fitness from "../assets/fitnis.png";
import Digital from '../assets/Digital.png'
import Clothify from '../assets/winter.png'
import { FaGithub } from "react-icons/fa";


const Projects = () => {
  const projects = [
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
      techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      link: "https://business420.netlify.app/",
      github: "https://github.com/rohitsingh93300/YTBusiness",
      image: Digital, // Replace with your project screenshot
    },
    {
      title: "Nike Shoes",
      description:
        "A fully responsive commercial website for Nike, built using React.js for the frontend, Node.js for the backend, and JSON for dynamic data management",
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
      link: "https://nike-topaz-delta.vercel.app/",
      github: "https://github.com/Mahabub2030/-Commercial-website-for-Nike-",
      image: Nike, // Replace with your project screenshot
    },
    {
      title: "Winter-Clothing-Donation",
      description:
        "The **Winter Clothing Donation** project is a web-based platform designed to facilitate the collection and distribution of winter clothes to those in need.",
      techStack: ["React Js", "Talwincss", "Firebase Authentication"],
      link: "https://wwwclothingcom.netlify.app/",
      github: "https://github.com/Mahabub2030/Winter-Clothing-Donation",
      image: Clothify, // Replace with your project screenshot
    },
    {
      title: "Fitness-Tracker (Full-satck)",
      description:
        "A full-stack fitness tracking web app that allows users to log workouts, set fitness goals, and monitor progress through dynamic charts. Built with React, Node.js, Express, and MongoDB.",
      techStack: [
        "React Js",
        "Talwincss",
        "DaisyUI",
        "-",
        "BackEnd :",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Authentication",
      ],
      link: "https://gym-auth-af6ad.web.app/",
      github: "https://github.com/Mahabub2030/Fitness-Tracker-Project",
      image: Fitness, // Replace with your project screenshot
    },
  ];

  return (
    <section id="project" className="bg-gradient-to-r bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover px-3 pt-3 rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub/> Github
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
