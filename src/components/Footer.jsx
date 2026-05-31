import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
      relative
      mt-20
      border-t
      border-slate-800
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-8
        "
        >
          <div>
            <h2
              className="
              text-3xl
              font-bold
              gradient-text
            "
            >
              Sakshi Phalke
            </h2>

            <p className="text-gray-400 mt-2">
              Java Full Stack Developer
            </p>
          </div>

          {/* Social Links */}

          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/sakshi-phalke-49a8ba352"
              target="_blank"
              rel="noreferrer"
              className="icon-circle"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="icon-circle"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Divider */}

        <div
          className="
          my-8
          border-t
          border-slate-800
        "
        />

        {/* Bottom */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
        "
        >
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Sakshi Phalke.
            All Rights Reserved.
          </p>

          <p
            className="
            flex
            items-center
            gap-2
            text-gray-400
          "
          >
            Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll To Top Button */}

      <button
        onClick={scrollTop}
        className="
        fixed
        bottom-8
        right-8

        w-14
        h-14

        rounded-full

        bg-gradient-to-r
        from-cyan-500
        to-purple-600

        flex
        items-center
        justify-center

        shadow-lg
        shadow-cyan-500/30

        hover:scale-110
        transition
      "
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}