import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const projects = [
  {
    title: "Tech Video Library",
    github: "https://github.com/Shivam-Tidke/video-library-client",
    live: "https://video-library-client.vercel.app",
    description:
      "A full-stack video library platform with role-based access. Features include video management, authentication, search, likes, and comments.",
    stack:
      "MongoDB, Express.js, React (TypeScript), Node.js, Tailwind CSS, JWT",
  },
  {
    title: "MovieDB Web App",
    github: "https://github.com/Shivam-Tidke/MovieDb",
    live: "https://681718479822ebee530b68c0--moviesoftmbd.netlify.app/",
    description:
      "Explore popular, top-rated, and upcoming movies with a powerful search experience powered by TMDB API.",
    stack: "React, JavaScript, Tailwind CSS, TMDB API",
  },
  {
    title: "IoT Remote Patient Health Monitoring",
    live: "/5r.pdf",
    description:
      "Real-time monitoring of health vitals like heart rate and temperature with ESP32 and cloud analytics via ThingSpeak.",
    stack:
      "ESP8266, MAX30100, NTC Thermistor, SIM800L, Arduino IDE, ThingSpeak",
  },
];

export function Project() {
  return (
    <section id="project" className="pt-30 pb-15 bg-[#0b0f14] justify-center flex flex-col items-center ">
      <div className="max-w-7xl  px-6 lg:px-20 xl:px-20 w-full sm:px-8 ">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Projects
        </h2>

        {/* Scrollable container */}
        <div className="max-h-[calc(100vh-150px)] overflow-y-auto space-y-6 pr-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                bg-gray-900 rounded-lg p-5
                hover:bg-gray-800
                transition
                shadow-md hover:shadow-xl
              "
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-primary transition"
                    >
                      <IoLogoGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl hover:text-primary transition"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <p className="text-sm">
                <span className="text-primary font-medium">
                  Tech Stack:
                </span>{" "}
                {project.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
