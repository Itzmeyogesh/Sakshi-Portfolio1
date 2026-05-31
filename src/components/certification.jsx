import { motion } from "framer-motion";
import { useState } from "react";
import { FaAward } from "react-icons/fa";

import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";

export default function Certification() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      image: cert1,
      title: "Java Full Stack Development",
      institute: "The Kiran Academy",
      description:
        "Successfully completed Java Full Stack Development training covering Core Java, OOPs, Collections, JDBC, Spring Boot, Hibernate, REST APIs, MySQL, React, and real-world project implementation.",
    },

    {
      image: cert2,
      title: "Professional Technical Certification",
      institute: "Technical Training Program",
      description:
        "Completed technical training focused on software development fundamentals, database management, coding best practices, problem solving, and industry-oriented project development.",
    },
  ];

  return (
    <section
      id="certifications"
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
            Certifications
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
            Professional certifications and technical training
            programs that strengthened my Java Full Stack
            Development, software engineering, database
            management, and problem-solving skills.
          </p>
        </motion.div>

        {/* Certificate Cards */}

        <div className="grid md:grid-cols-2 gap-10">
          {certificates.map((certificate, index) => (
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
                y: -10,
                scale: 1.02,
              }}
              className="
                glass
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                cursor-pointer
                card-hover
              "
              onClick={() =>
                setSelectedImage(certificate.image)
              }
            >
              {/* Image */}

              <div className="overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    w-full
                    h-[480px]
                    object-cover
                    transition-all
                    duration-500
                    hover:scale-110
                  "
                />
              </div>

              {/* Content */}

              <div className="p-6">

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      bg-cyan-500/10
                      flex
                      items-center
                      justify-center
                      text-cyan-400
                    "
                  >
                    <FaAward />
                  </div>

                  <span
                    className="
                      px-4
                      py-1
                      rounded-full
                      bg-purple-500/10
                      text-purple-400
                      text-sm
                    "
                  >
                    Certification
                  </span>
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                    mb-3
                  "
                >
                  {certificate.title}
                </h3>

                <p
                  className="
                    text-cyan-400
                    font-medium
                    mb-4
                  "
                >
                  {certificate.institute}
                </p>

                <p
                  className="
                    text-gray-400
                    leading-7
                  "
                >
                  {certificate.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Preview Modal */}

        {selectedImage && (
          <div
            className="
              fixed
              inset-0
              bg-black/90
              backdrop-blur-sm
              z-50
              flex
              items-center
              justify-center
              p-5
            "
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              src={selectedImage}
              alt="Certificate"
              className="
                max-w-6xl
                max-h-[90vh]
                rounded-3xl
                shadow-2xl
                border
                border-white/10
              "
            />
          </div>
        )}
      </div>
    </section>
  );
}