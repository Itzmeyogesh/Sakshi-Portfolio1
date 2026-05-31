import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaCertificate,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      id: "home",
      icon: <FaHome size={20} />,
      label: "Home",
    },
    {
      id: "about",
      icon: <FaUser size={20} />,
      label: "About",
    },
    {
      id: "skills",
      icon: <FaCode size={20} />,
      label: "Skills",
    },
    {
      id: "education",
      icon: <FaGraduationCap size={20} />,
      label: "Education",
    },
    {
      id: "certifications",
      icon: <FaCertificate size={20} />,
      label: "Certificates",
    },
    {
      id: "projects",
      icon: <FaProjectDiagram size={20} />,
      label: "Projects",
    },
    {
      id: "contact",
      icon: <FaEnvelope size={20} />,
      label: "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const top = section.offsetTop - 150;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          md:hidden
          fixed
          top-5
          left-5
          z-50
          w-12
          h-12
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-purple-600
          flex
          items-center
          justify-center
          shadow-lg
        "
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed
          left-0
          top-0
          h-screen
          z-40

          bg-slate-950/80
          backdrop-blur-xl
          border-r
          border-cyan-500/20

          transition-transform
          duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
          md:w-28
          w-24
        `}
      >
        <div className="flex flex-col items-center h-full py-6">

          {/* Logo */}
          <div
            className="
              w-16
              h-16
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              flex
              items-center
              justify-center
              text-white
              text-2xl
              font-bold
              shadow-lg
              shadow-cyan-500/40
            "
          >
            S
          </div>

          {/* Name */}
          <h2 className="mt-4 text-sm text-center font-semibold text-white">
            Sakshi
          </h2>

          {/* Navigation */}
          <div className="flex flex-col gap-5 mt-10">

            {menuItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex justify-center"
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-14
                    h-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300

                    ${
                      active === item.id
                        ? `
                          bg-gradient-to-r
                          from-cyan-500
                          to-purple-600
                          shadow-lg
                          shadow-cyan-500/50
                          scale-110
                        `
                        : `
                          bg-slate-800
                          hover:bg-slate-700
                          hover:scale-105
                        `
                    }
                  `}
                >
                  {item.icon}
                </button>

                {/* Tooltip */}
                <span
                  className="
                    absolute
                    left-20
                    top-1/2
                    -translate-y-1/2

                    bg-slate-800
                    text-white
                    text-xs

                    px-3
                    py-2
                    rounded-lg

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-300

                    whitespace-nowrap
                    pointer-events-none
                  "
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="mt-auto flex flex-col gap-4 mb-8">

            <a
              href="https://linkedin.com/in/sakshi-phalke-49a8ba352"
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                rounded-full
                bg-slate-800
                flex
                items-center
                justify-center
                hover:bg-cyan-500
                transition
              "
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="
                w-12
                h-12
                rounded-full
                bg-slate-800
                flex
                items-center
                justify-center
                hover:bg-purple-500
                transition
              "
            >
              <FaGithub size={18} />
            </a>

          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;