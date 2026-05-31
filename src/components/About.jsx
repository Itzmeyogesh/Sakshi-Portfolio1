import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDatabase,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-center
          gradient-text
          mb-16
        "
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
            glass
            rounded-3xl
            p-8
          "
          >
            <h3 className="text-3xl font-bold mb-6">
              Career Objective
            </h3>

            <p className="text-gray-400 leading-8">
              To obtain a Java Developer position where I
              can apply my technical skills and programming
              knowledge in a professional environment.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              I am eager to learn new technologies,
              improve my abilities, and gain practical
              experience while contributing effectively
              to organizational success.
            </p>
          </motion.div>

          {/* RIGHT INFO */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-6 rounded-3xl">
              <div className="flex items-center gap-4">
                <FaJava
                  className="text-cyan-400"
                  size={35}
                />

                <div>
                  <h4 className="font-semibold text-xl">
                    Java Development
                  </h4>

                  <p className="text-gray-400">
                    Core Java, OOPs,
                    Collections, Exception Handling
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-3xl">
              <div className="flex items-center gap-4">
                <FaReact
                  className="text-cyan-400"
                  size={35}
                />

                <div>
                  <h4 className="font-semibold text-xl">
                    Frontend Development
                  </h4>

                  <p className="text-gray-400">
                    React JS, HTML, CSS,
                    JavaScript
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-3xl">
              <div className="flex items-center gap-4">
                <FaDatabase
                  className="text-cyan-400"
                  size={35}
                />

                <div>
                  <h4 className="font-semibold text-xl">
                    Database Management
                  </h4>

                  <p className="text-gray-400">
                    MySQL, JDBC Connectivity,
                    Database Design
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="glass rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold gradient-text">
              3+
            </h3>

            <p className="text-gray-400 mt-2">
              Academic Projects
            </p>
          </div>

          <div className="glass rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold gradient-text">
              10+
            </h3>

            <p className="text-gray-400 mt-2">
              Technologies Learned
            </p>
          </div>

          <div className="glass rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold gradient-text">
              100%
            </h3>

            <p className="text-gray-400 mt-2">
              Learning Focused
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}