import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
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
          Contact Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-6 flex items-center gap-5">
              <div className="icon-circle">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="font-semibold">
                  Email
                </h4>

                <p className="text-gray-400">
                  sakshiphalke2004@gmail.com
                </p>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 flex items-center gap-5">
              <div className="icon-circle">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="font-semibold">
                  Location
                </h4>

                <p className="text-gray-400">
                  Karvenagar, Pune, Maharashtra
                </p>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 flex items-center gap-5">
              <div className="icon-circle">
                <FaLinkedin />
              </div>

              <div>
                <h4 className="font-semibold">
                  LinkedIn
                </h4>

                <a
                  href="https://linkedin.com/in/sakshi-phalke-49a8ba352"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400"
                >
                  View Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
            glass
            rounded-3xl
            p-8
            space-y-6
          "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              bg-slate-800
              p-4
              rounded-xl
              outline-none
              border border-slate-700
            "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
              w-full
              bg-slate-800
              p-4
              rounded-xl
              outline-none
              border border-slate-700
            "
            />

            <input
              type="text"
              placeholder="Subject"
              className="
              w-full
              bg-slate-800
              p-4
              rounded-xl
              outline-none
              border border-slate-700
            "
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="
              w-full
              bg-slate-800
              p-4
              rounded-xl
              outline-none
              border border-slate-700
            "
            />

            <button
              type="submit"
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
              <FaPaperPlane />
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}