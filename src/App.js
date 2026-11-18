
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Mail,
  Menu,
  X,
  GraduationCap,
  BookOpen,
  Sun,
  Moon,
} from "lucide-react";
import "./App.css";

// ==============================
// PORTFOLIO DATA
// ==============================

const experiences = [
  {
    role: "Marketing Lead",
    company: "Pranayuv Technologies Pvt Ltd",
    date: "Jan 2026 — Apr 2026",
  },
  {
    role: "IT Intern",
    company: "Dredging Corporation of India Limited",
    date: "Jan 2025 — Apr 2025",
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Slash Mark IT Solutions",
    date: "Dec 2024 — Apr 2025",
  },
  {
    role: "Full Stack Java Intern",
    company: "SkillDzire",
    date: "May 2024 — Jul 2024",
  },
  {
    role: "Salesforce Developer",
    company: "Salesforce",
    date: "Jan 2024 — Apr 2024",
  },
];

const education = [
  {
    degree: "MBA Global with Placement",
    school: "University of Greenwich",
    date: "2026 — 2028",
  },
  {
    degree: "Computer Science and Engineering",
    school:
      "Velagapudi Ramakrishna Siddhartha Engineering College",
    date: "2021 — 2025",
  },
  {
    degree: "Intermediate",
    school: "Tirumala Mahila Kalasala",
    date: "2019 — 2021",
  },
  {
    degree: "Class 10 — CBSE",
    school: "Atkinson Sr Sec School",
    date: "2018 — 2019",
  },
];

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING",
    title: "Maritime Accident Prediction",
    description:
      "An interpretable maritime accident prediction model using logistic regression.",
    year: "2024 — 2025",
  },
  {
    number: "02",
    category: "DATA SCIENCE",
    title: "Personalized Health Recommendations",
    description:
      "Personalized recommendations for managing non-alcoholic fatty liver disease using XGBoost.",
    year: "2024",
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Liver Disease Categorization",
    description:
      "Categorization of non-alcoholic fatty liver disease using XGBoost.",
    year: "2024",
  },
  {
    number: "04",
    category: "INTERNET OF THINGS",
    title: "Smart Library Counting System",
    description:
      "A smart library user counting system developed using IoT technology.",
    year: "2023",
  },
];

const skills = [
  "Communication & Storytelling",
  "Analytical Thinking",
  "Problem Solving",
  "Project Management",
  "Microsoft Office Suite",
  "Adaptability",
  "Teamwork & Collaboration",
  "Navigating Ambiguity",
];

// ==============================
// ANIMATION COMPONENT
// ==============================

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// ==============================
// NAVBAR
// ==============================

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <a className="logo" href="#home">
          HP<span>.</span>
        </a>

        <div className="nav-right">
          <nav
            className={menuOpen ? "nav-links active" : "nav-links"}
            aria-label="Main navigation"
          >
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
            title={
              theme === "light" ? "Dark mode" : "Light mode"
            }
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

// ==============================
// HERO
// ==============================

function Hero() {
  return (
    <section className="hero container" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-label">
          <span className="status-dot" />
          BUSINESS · TECHNOLOGY · INNOVATION
        </div>

        <h1>
          Hi, I'm Hari Priya<span className="accent">.</span>
          <br />
          <span className="muted">
            Connecting ideas
            <br />
            with impact.
          </span>
        </h1>

        <p className="hero-description">
          An MBA Global student at the University of Greenwich
          with a background in Computer Science and experience
          across marketing, technology, and research.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button button-dark">
            Explore My Work <ArrowUpRight size={18} />
          </a>
          <a href="#contact" className="button button-light">
            Get in Touch
          </a>
        </div>
      </motion.div>

      <div className="hero-bottom">
        <span>BUSINESS & TECHNOLOGY PROFESSIONAL</span>
        <a href="#about">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}

// ==============================
// ABOUT
// ==============================

function About() {
  return (
    <section id="about" className="section container">
      <Reveal>
        <p className="eyebrow">01 / ABOUT ME</p>

        <div className="about-grid">
          <h2>
            A little
            <br />
            about me<span className="accent">.</span>
          </h2>

          <div className="about-content">
            <p className="lead">
              I bring together business thinking, technical
              knowledge, and a passion for solving meaningful
              problems.
            </p>
            <p>
              I am pursuing an MBA Global with Placement at the
              University of Greenwich, building upon my academic
              background in Computer Science and Engineering.
            </p>
            <p>
              My experience spans marketing leadership, IT,
              software development, and research. I enjoy
              exploring how technology and business can work
              together to create practical solutions.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ==============================
// EXPERIENCE
// ==============================

function Experience() {
  return (
    <section id="experience" className="section container">
      <Reveal>
        <p className="eyebrow">02 / EXPERIENCE</p>
        <h2>
          Professional journey<span className="accent">.</span>
        </h2>
        <p className="section-description">
          Experience across business, marketing, and technology.
        </p>
      </Reveal>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <Reveal key={index}>
            <div className="experience-row">
              <div className="experience-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="experience-info">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <span className="experience-date">{item.date}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ==============================
// EDUCATION
// ==============================

function Education() {
  return (
    <section id="education" className="section container">
      <Reveal>
        <p className="eyebrow">03 / EDUCATION</p>
        <h2>
          Academic background<span className="accent">.</span>
        </h2>
      </Reveal>

      <div className="education-grid">
        {education.map((item, index) => (
          <Reveal key={index}>
            <div className="education-card">
              <GraduationCap size={25} strokeWidth={1.5} />
              <div>
                <span className="education-date">{item.date}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ==============================
// PROJECTS
// ==============================

function Projects() {
  return (
    <section id="projects" className="section container">
      <Reveal>
        <p className="eyebrow">04 / SELECTED WORK</p>
        <h2>
          Projects & research<span className="accent">.</span>
        </h2>
        <p className="section-description">
          Exploring practical applications of data, machine
          learning, and technology.
        </p>
      </Reveal>

      <div className="project-grid">
        {projects.map((project) => (
          <Reveal key={project.number}>
            <article className="project-card">
              <div className="project-top">
                <span>
                  {project.number} / {project.year}
                </span>
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </div>

              <div className="project-content">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ==============================
// SKILLS
// ==============================

function Skills() {
  return (
    <section id="skills" className="section container">
      <Reveal>
        <p className="eyebrow">05 / EXPERTISE</p>
        <h2>
          Skills & strengths<span className="accent">.</span>
        </h2>
      </Reveal>

      <Reveal>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill}>
              <span className="skill-dot" />
              {skill}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

// ==============================
// PUBLICATION
// ==============================

function Publication() {
  return (
    <section id="publication" className="section container">
      <Reveal>
        <p className="eyebrow">06 / PUBLICATION</p>
        <h2>
          Published research<span className="accent">.</span>
        </h2>

        <div className="publication-card">
          <BookOpen size={30} strokeWidth={1.5} />

          <div>
            <p className="eyebrow">RESEARCH PUBLICATION</p>
            <h3>
              Categorization of Non-Alcoholic Fatty Liver
              Disease Using XG-Boost
            </h3>
            <a
              href="https://ieeexplore.ieee.org/document/10837138"
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              View Publication <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// ==============================
// CONTACT
// ==============================

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">07 / CONTACT</p>
          <h2>
            Let's connect<span className="accent">.</span>
          </h2>
          <p className="contact-description">
            I'm always interested in meaningful conversations,
            new ideas, and professional opportunities.
            Feel free to reach out.
          </p>

          <div className="contact-buttons">
            <a
              className="button button-dark"
              href="mailto:haripriyayellajosyula2003@gmail.com"
            >
              <Mail size={19} />
              Send an Email
            </a>

            <a
              className="button button-light"
              href="https://www.linkedin.com/in/hari-priya-aaa0a624b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/linkedin.png`}
                alt=""
                className="social-icon"
              />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ==============================
// FOOTER
// ==============================

function Footer() {
  return (
    <footer className="footer container">
      <a className="footer-logo" href="#home">
        HP<span>.</span>
      </a>
      <p>
        © {new Date().getFullYear()} Hari Priya Yellajosyula.
        All rights reserved.
      </p>
      <a href="#home" className="back-to-top">
        Back to top ↑
      </a>
    </footer>
  );
}

// ==============================
// MAIN APP WITH THEME SUPPORT
// ==============================

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") {
        return saved;
      }
    } catch (error) {
      // Continue with the default theme.
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      // Theme still works if storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "light" ? "dark" : "light"
    );
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Publication />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
