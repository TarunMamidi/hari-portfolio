
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

const EMAIL = "haripriyayellajosyula2003@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/hari-priya-aaa0a624b/";
const PUBLICATION = "https://ieeexplore.ieee.org/document/10837138";

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
    school: "Velagapudi Ramakrishna Siddhartha Engineering College",
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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// --------------------------------------
// PREMIUM LOADING SCREEN
// --------------------------------------

function Loader() {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          H<span>.</span>P<span>.</span>
        </motion.div>

        <div className="loader-progress">
          <motion.div
            className="loader-progress-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.55,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.p
          className="loader-caption"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          A PERSONAL PORTFOLIO
        </motion.p>
      </div>
    </motion.div>
  );
}

// --------------------------------------
// TYPEWRITER
// --------------------------------------

function Typewriter({ text, start, onComplete }) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!start) return;

    if (reduceMotion) {
      setCount(text.length);
      setComplete(true);
      return;
    }

    if (count >= text.length) {
      setComplete(true);
      return;
    }

    const timer = setTimeout(
      () => setCount((current) => current + 1),
      count === 0 ? 350 : 78
    );

    return () => clearTimeout(timer);
  }, [start, count, text, reduceMotion]);

  useEffect(() => {
    if (complete) onComplete();
  }, [complete, onComplete]);

  return (
    <span className="typewriter-wrapper">
      <span className="typewriter-visible" aria-hidden="true">
        {text.slice(0, count)}
        <span
          className={
            complete
              ? "typewriter-cursor cursor-complete"
              : "typewriter-cursor"
          }
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}

// --------------------------------------
// NAVIGATION
// --------------------------------------

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
        <a className="logo" href="#home" aria-label="Home">
          H<span>.</span>P<span>.</span>
        </a>

        <div className="nav-right">
          <nav
            className={`nav-links ${menuOpen ? "active" : ""}`}
            aria-label="Main navigation"
          >
            {links.map(([label, href]) => (
              <a
                href={href}
                key={label}
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
          >
            {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
          </button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}

// --------------------------------------
// HERO
// --------------------------------------

function Hero({ startAnimation }) {
  const [typingComplete, setTypingComplete] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 12 }}
          animate={
            startAnimation
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 12 }
          }
          transition={{ duration: 0.7 }}
        >
          <span className="status-dot" />
          BUSINESS · TECHNOLOGY · INNOVATION
        </motion.div>

        <h1 className="hero-heading">
          <motion.span
            className="hero-greeting"
            initial={{ opacity: 0, y: 15 }}
            animate={
              startAnimation
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Hi, I'm
          </motion.span>

          <span className="hero-name">
            <Typewriter
              text="Hari Priya Yellajosyula"
              start={startAnimation}
              onComplete={() => setTypingComplete(true)}
            />
          </span>
        </h1>

        <motion.div
          className="hero-after-typing"
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: typingComplete ? 1 : 0,
            y: typingComplete ? 0 : 24,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            pointerEvents: typingComplete ? "auto" : "none",
          }}
        >
          <h2 className="hero-tagline">
            Connecting ideas
            <br />
            with <span className="accent">impact.</span>
          </h2>

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
      </div>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: typingComplete ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <span>BUSINESS & TECHNOLOGY PROFESSIONAL</span>
        <a href="#about">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </motion.div>
    </section>
  );
}

// --------------------------------------
// ABOUT
// --------------------------------------

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
              I bring together business thinking, technical knowledge,
              and a passion for solving meaningful problems.
            </p>
            <p>
              I am pursuing an MBA Global with Placement at the
              University of Greenwich, building upon my academic
              background in Computer Science and Engineering.
            </p>
            <p>
              My experience spans marketing leadership, IT, software
              development, and research. I enjoy exploring how
              technology and business can work together to create
              practical solutions.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

// --------------------------------------
// EXPERIENCE
// --------------------------------------

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
          <Reveal key={item.role}>
            <div className="experience-row">
              <span className="experience-number">
                {String(index + 1).padStart(2, "0")}
              </span>
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

// --------------------------------------
// EDUCATION
// --------------------------------------

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
        {education.map((item) => (
          <Reveal key={item.degree}>
            <article className="education-card">
              <GraduationCap size={26} strokeWidth={1.5} />
              <div>
                <span className="education-date">{item.date}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// --------------------------------------
// PROJECTS
// --------------------------------------

function Projects() {
  return (
    <section id="projects" className="section container">
      <Reveal>
        <p className="eyebrow">04 / SELECTED WORK</p>
        <h2>
          Projects & research<span className="accent">.</span>
        </h2>
        <p className="section-description">
          Exploring practical applications of data, machine learning,
          and technology.
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

// --------------------------------------
// SKILLS
// --------------------------------------

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

// --------------------------------------
// PUBLICATION
// --------------------------------------

function Publication() {
  return (
    <section id="publication" className="section container">
      <Reveal>
        <p className="eyebrow">06 / PUBLICATION</p>
        <h2>
          Published research<span className="accent">.</span>
        </h2>

        <article className="publication-card">
          <BookOpen size={30} strokeWidth={1.5} />
          <div>
            <p className="eyebrow">RESEARCH PUBLICATION</p>
            <h3>
              Categorization of Non-Alcoholic Fatty Liver Disease
              Using XG-Boost
            </h3>
            <a
              href={PUBLICATION}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-link"
            >
              View Publication <ArrowUpRight size={18} />
            </a>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

// --------------------------------------
// CONTACT
// --------------------------------------

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
            <a href={`mailto:${EMAIL}`} className="button button-dark">
              <Mail size={19} />
              Send an Email
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-light"
            >
              <img
                src={`${process.env.PUBLIC_URL}/icons/linkedin.svg`}
                alt=""
                className="social-icon"
              />
              LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// --------------------------------------
// FOOTER
// --------------------------------------

function Footer() {
  return (
    <footer className="footer container">
      <a className="footer-logo" href="#home">
        H<span>.</span>P<span>.</span>
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

// --------------------------------------
// MAIN APP
// --------------------------------------

export default function App() {
  const reduceMotion = useReducedMotion();

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch (error) {
      // Storage may be unavailable.
    }
    return "light";
  });

  const [loading, setLoading] = useState(!reduceMotion);
  const [heroReady, setHeroReady] = useState(!!reduceMotion);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      // Storage may be unavailable.
    }
  }, [theme]);

  useEffect(() => {
    if (reduceMotion) {
      setLoading(false);
      setHeroReady(true);
      return;
    }

    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <>
      <AnimatePresence
        onExitComplete={() => setHeroReady(true)}
      >
        {loading && <Loader key="portfolio-loader" />}
      </AnimatePresence>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero startAnimation={heroReady} />
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
