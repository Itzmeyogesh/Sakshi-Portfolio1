import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDatabase,
  FaExternalLinkAlt,
} from "react-icons/fa";

import project1 from "../assets/Project1.png";
import project2 from "../assets/Project2.jpeg";
import project3 from "../assets/Project3.jpg";

const projects = [
  {
    title: "BookMyShow Ticket Booking System",
    image: project1,
    icon: <FaJava />,
    description:
      "Developed a Java-based movie ticket booking system allowing users to select movies, choose theaters, reserve seats, and receive booking confirmations. Implemented OOP concepts and Java Collections for efficient data handling.",
    technologies: [
      "Core Java",
      "OOP",
      "Collections",
      "Exception Handling",
    ],
  },

  {
    title: "Portfolio Makeup Artist",
    image: project2,
    icon: <FaDatabase />,
    description:
      "Created a professional portfolio website for a makeup artist showcasing services, gallery, client information, and backend integration with MySQL. Focused on responsive UI and smooth user experience.",
    technologies: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
  },

  {
    title: "Employee Management System",
    image: project3,
    icon: <FaReact />,
    description:
      "Built a complete employee management application to add, update, delete, and manage employee records. Developed frontend using React and backend logic using Java with MySQL database integration.",
    technologies: [
      "React",
      "Java",
      "MySQL",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              gradient-text
            "
          >
            Featured Projects
          </h2>

          <div
            className="
              w-32
              h-1
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              mx-auto
              mt-4
              rounded-full
            "
          />

          <p
            className="
              text-gray-400
              mt-6
              max-w-3xl
              mx-auto
              leading-8
            "
          >
            A collection of projects demonstrating my skills
            in Java, Spring Boot, React, MySQL, Object-Oriented
            Programming, and Full Stack Development.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                glass
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                card-hover
              "
            >
              {/* Project Image */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-60
                    object-cover
                    transition-all
                    duration-500
                    hover:scale-110
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/30
                    to-transparent
                  "
                />

                {/* Project Number */}

                <div
                  className="
                    absolute
                    top-4
                    left-4
                    w-12
                    h-12
                    rounded-full
                    bg-cyan-500
                    text-black
                    font-bold
                    flex
                    items-center
                    justify-center
                  "
                >
                  0{index + 1}
                </div>

                {/* Icon */}

                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    text-4xl
                    text-cyan-400
                  "
                >
                  {project.icon}
                </div>

              </div>

              {/* Project Content */}

              <div className="p-7">

                <h3
                  className="
                    text-2xl
                    font-bold
                    mb-4
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    leading-7
                    mb-6
                  "
                >
                  {project.description}
                </p>

                {/* Technology Tags */}

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.technologies.map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="
                          px-3
                          py-2
                          rounded-full
                          text-sm
                          bg-cyan-500/10
                          text-cyan-400
                          border
                          border-cyan-500/20
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}

                </div>

                {/* Button */}

                <button
                  className="
                    flex
                    items-center
                    gap-3
                    text-cyan-400
                    hover:text-white
                    transition-all
                    duration-300
                  "
                >
                  View Project
                  <FaExternalLinkAlt />
                </button>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}