import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("personal-info");
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Sun/Moon unicode
  const themeIcon = theme === 'light' ? '🌜' : '🌞';

  // Highlight active section while scrolling
  useEffect(() => {
    if (location.pathname === "/resume") {
      setActive("resume");
      return;
    }

    const handleScroll = () => {
      const sections = ["personal-info", "education", "skills", "projects", "certifications", "interests"];
      let current = "personal-info";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"}
      </button>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <h3>Sanyu Paul Reddy</h3>

        {/* Theme toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle light/dark mode"
        >
          {themeIcon}
        </button>

        {/* Navigation */}
        <nav>
          <button
            className={`nav-link ${active === "personal-info" ? "active" : ""}`}
            onClick={() => scrollToSection("personal-info")}
          >
            Personal Info
          </button>
          <button
            className={`nav-link ${active === "education" ? "active" : ""}`}
            onClick={() => scrollToSection("education")}
          >
            Education
          </button>
          <button
            className={`nav-link ${active === "skills" ? "active" : ""}`}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className={`nav-link ${active === "projects" ? "active" : ""}`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className={`nav-link ${active === "certifications" ? "active" : ""}`}
            onClick={() => scrollToSection("certifications")}
          >
            Certifications
          </button>
          <button
            className={`nav-link ${active === "interests" ? "active" : ""}`}
            onClick={() => scrollToSection("interests")}
          >
            Interests
          </button>

          {/* Resume stays as route */}
          <NavLink
            to="/resume"
            className={`nav-link ${active === "resume" ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            Resume
          </NavLink>
        </nav>
      </nav>
    </>
  );
};

export default Sidebar;
