import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

import profile from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        relative
        overflow-hidden
        px-6
        md:px-12
        lg:px-20
      "
    >
      {/* Background Effects */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-400 font-medium text-lg">
            Welcome To My Portfolio
          </span>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm
            <br />

            <span className="gradient-text">
              Sakshi Phalke
            </span>
          </h1>

          <div className="mt-6 text-2xl md:text-4xl font-semibold">
            <TypeAnimation
              sequence={[
                "Java Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Spring Boot Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-2xl">
            Passionate Java Developer with expertise in
            Core Java, Spring Boot, Hibernate, MySQL,
            HTML, CSS, JavaScript and React. Dedicated to
            building scalable applications and continuously
            improving technical skills.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href={resume}
              download
              className="
                btn-gradient
                px-8
                py-4
                rounded-full
                flex
                items-center
                gap-3
              "
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="
                px-8
                py-4
                rounded-full
                border
                border-cyan-500
                hover:bg-cyan-500
                transition-all
                duration-300
              "
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}

          <div className="flex gap-5 mt-10">
            <a
              href="https://www.linkedin.com/in/sakshi-phalke-49a8ba352"
              target="_blank"
              rel="noreferrer"
              className="icon-circle"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://github.com/SakshiPhalke"
              target="_blank"
              rel="noreferrer"
              className="icon-circle"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                bg-cyan-500/20
                blur-[120px]
                rounded-full
                scale-125
              "
            />

            {/* Image */}

            <div className="floating relative">
              <img
                src={profile}
                alt="Sakshi Phalke"
                className="
                  w-[320px]
                  md:w-[500px]
                  aspect-square
                  object-cover
                  rounded-full
                  border-4
                  border-white/10
                  shadow-[0_20px_80px_rgba(6,182,212,0.25)]
                "
              />
            </div>

            {/* Badge */}

            <div
              className="
                absolute
                bottom-8
                -left-6
                glass
                px-5
                py-3
                rounded-2xl
              "
            >
              <p className="text-cyan-400 font-semibold">
                Java Developer
              </p>
            </div>

            <div
              className="
                absolute
                top-12
                -right-6
                glass
                px-5
                py-3
                rounded-2xl
              "
            >
              <p className="text-purple-400 font-semibold">
                Spring Boot
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}

      <a
        href="#about"
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          animate-bounce
        "
      >
        <FaArrowDown size={24} />
      </a>
    </section>
  );
}