import { useEffect, useState } from "react";
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
} from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      id: "home",
      icon: <FaHome />,
      label: "Home",
    },
    {
      id: "about",
      icon: <FaUser />,
      label: "About",
    },
    {
      id: "skills",
      icon: <FaCode />,
      label: "Skills",
    },
    {
      id: "education",
      icon: <FaGraduationCap />,
      label: "Education",
    },
    {
      id: "certifications",
      icon: <FaCertificate />,
      label: "Certificates",
    },
    {
      id: "projects",
      icon: <FaProjectDiagram />,
      label: "Projects",
    },
    {
      id: "contact",
      icon: <FaEnvelope />,
      label: "Contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
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
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="
        hidden md:flex
        fixed top-5 left-1/2
        -translate-x-1/2
        z-50

        bg-slate-900/80
        backdrop-blur-xl

        border border-cyan-500/20

        rounded-full

        px-6 py-3

        shadow-lg
        shadow-cyan-500/10
      "
      >
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
            >
              <button
                onClick={() =>
                  scrollToSection(item.id)
                }
                className={`
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center

                  transition-all duration-300

                  ${
                    active === item.id
                      ? `
                        bg-gradient-to-r
                        from-cyan-500
                        to-purple-600

                        text-white

                        shadow-lg
                        shadow-cyan-500/40

                        scale-110
                      `
                      : `
                        bg-slate-800
                        text-gray-300

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
                top-14
                left-1/2
                -translate-x-1/2

                opacity-0
                group-hover:opacity-100

                transition

                bg-slate-800
                text-xs
                px-3 py-1
                rounded-lg

                whitespace-nowrap
              "
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        className="
        md:hidden

        fixed top-5 right-5

        z-50

        w-12 h-12

        rounded-full

        bg-gradient-to-r
        from-cyan-500
        to-purple-600

        flex items-center justify-center

        shadow-lg
      "
      >
        {menuOpen ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          md:hidden

          fixed
          top-20
          right-5

          bg-slate-900/95
          backdrop-blur-xl

          border
          border-cyan-500/20

          rounded-3xl

          p-4

          z-40
        "
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  scrollToSection(item.id)
                }
                className="
                flex items-center
                gap-3

                px-4 py-3

                rounded-xl

                bg-slate-800

                hover:bg-cyan-500

                transition
              "
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;