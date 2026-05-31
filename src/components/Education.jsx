import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2022 - 2025",
    degree:
      "Bachelor of Business Administration in Computer Application",
    institute:
      "Sinhgad College Of Science",
    description:
      "Focused on software development, programming concepts, databases, and web technologies.",
  },

  {
    year: "2020 - 2022",
    degree:
      "Higher Secondary Certificate (HSC)",
    institute:
      "Vidya Pratishthan, Baramati",
    description:
      "Completed higher secondary education with a strong academic foundation.",
  },

  {
    year: "2019 - 2020",
    degree:
      "Secondary School Certificate (SSC)",
    institute:
      "Mahilshram High School, Karvenagar Pune",
    description:
      "Successfully completed secondary education.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
          mb-20
        "
        >
          Education
        </motion.h2>

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
            hidden md:block
            absolute
            left-1/2
            top-0
            h-full
            w-1
            bg-gradient-to-b
            from-cyan-500
            to-purple-600
            -translate-x-1/2
          "
          />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className={`
                relative
                mb-16
                flex
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }
              `}
            >
              {/* Timeline Dot */}

              <div
                className="
                hidden md:flex
                absolute
                left-1/2
                -translate-x-1/2

                w-14
                h-14

                rounded-full

                bg-gradient-to-r
                from-cyan-500
                to-purple-600

                items-center
                justify-center

                shadow-lg
              "
              >
                <FaGraduationCap />
              </div>

              <div
                className="
                glass
                rounded-3xl
                p-8

                md:w-[45%]
                w-full
              "
              >
                <span className="text-cyan-400 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {item.degree}
                </h3>

                <h4 className="mt-2 text-purple-400">
                  {item.institute}
                </h4>

                <p className="mt-4 text-gray-400 leading-7">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}