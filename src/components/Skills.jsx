import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql } from "react-icons/si";

const skills = [
  {
    name: "Java",
    icon: <FaJava />,
    level: "90%",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    level: "80%",
  },
  {
    name: "Hibernate",
    icon: <SiHibernate />,
    level: "80%",
  },
  {
    name: "React JS",
    icon: <FaReact />,
    level: "75%",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    level: "85%",
  },
  {
    name: "SQL",
    icon: <FaDatabase />,
    level: "85%",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    level: "90%",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    level: "85%",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: "80%",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
          text-center
          text-4xl
          md:text-5xl
          font-bold
          gradient-text
          mb-16
        "
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
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
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
              glass
              rounded-3xl
              p-8
            "
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="text-4xl text-cyan-400">
                  {skill.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="
                  h-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                "
                  style={{
                    width: skill.level,
                  }}
                />
              </div>

              <p className="mt-3 text-gray-400">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            Soft Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-5">

            {[
              "Problem Solving",
              "Presentation Skills",
              "Communication",
              "Team Work",
              "Quick Learning",
            ].map((skill, index) => (
              <div
                key={index}
                className="
                glass
                px-6
                py-3
                rounded-full
                hover:scale-105
                transition
              "
              >
                {skill}
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}