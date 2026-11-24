import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  ArrowDown,
  Send,
  Menu,
  X,
  Download,
  ExternalLink,
  Code2,
  Cpu,
  BrainCircuit,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import HeroScene from "./components/HeroScene";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const email = "arunputani2006@gmail.com";
  const github = "https://github.com/arunputani2006-oss";
  const linkedin = "https://www.linkedin.com/in/arun-p-33581a37b";
  const instagram = "https://www.instagram.com/_arunputani/";

  const resume = "/resume.pdf";
  const profileImage = "/images/profile.jpeg";
  const certificate = "/certificates/ewb-python-ai-certificate.pdf";

  const projects = [
    {
      title: "Student Performance Prediction",
      category: "PYTHON · MACHINE LEARNING",
      description:
        "Predicting student academic performance using machine learning techniques.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      github:
        "https://github.com/arunputani2006-oss/student-performance-prediction-system",
    },
    {
      title: "Crop Price Prediction",
      category: "PYTHON · DATA SCIENCE",
      description:
        "Exploring crop price prediction using data analysis and machine learning.",
      technologies: ["Python", "Pandas", "NumPy", "Machine Learning"],
      github: "",
    },
    {
      title: "Arduino Diwali Display",
      category: "ARDUINO · EMBEDDED SYSTEMS",
      description:
        "A festive electronic display using Arduino, LEDs and an LCD.",
      technologies: ["Arduino", "C++", "LCD", "Embedded Systems"],
      github: "",
    },
  ];

  const skills = [
    {
      title: "01 / PROGRAMMING",
      items: ["Python", "C Programming"],
    },
    {
      title: "02 / WEB DEVELOPMENT",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "03 / AI & DATA SCIENCE",
      items: ["Machine Learning", "Data Analysis", "Python Libraries"],
    },
    {
      title: "04 / ELECTRONICS",
      items: ["Arduino", "Digital Electronics", "Embedded Systems"],
    },
  ];

  const navigation = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Internships",
    "Certificates",
    "Education",
    "Resume",
    "Contact",
  ];

  return (
    <>
      {/* NAVIGATION */}

      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          AP<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-button" onClick={closeMenu}>
          LET'S CONNECT ↗
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* HERO SECTION */}

      <section className="hero" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            ✦ WELCOME TO MY DIGITAL WORLD
          </motion.p>

          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            ARUN
            <br />
            <span>PUTANI</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            ECE STUDENT <span>×</span> AI <span>×</span>
            <br />
            SOFTWARE DEVELOPMENT
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            I'm an Electronics and Communication Engineering student
            passionate about technology, programming and innovation.
            Exploring the intersection of electronics, artificial
            intelligence and software to build meaningful solutions.
          </motion.p>

          {/* HERO HIGHLIGHTS */}

          <motion.div
            className="hero-highlights"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="hero-highlight">
              <Code2 size={18} />
              <span>Developer</span>
            </div>

            <div className="hero-highlight">
              <BrainCircuit size={18} />
              <span>AI Enthusiast</span>
            </div>

            <div className="hero-highlight">
              <Cpu size={18} />
              <span>ECE Student</span>
            </div>
          </motion.div>

          {/* HERO BUTTONS */}

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="primary-button"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE MY WORK
              <ArrowDown size={17} />
            </motion.a>

            <motion.a
              href={resume}
              className="secondary-button"
              download
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={17} />
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>

          {/* HERO SOCIAL LINKS */}

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -5, scale: 1.15 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -5, scale: 1.15 }}
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              whileHover={{ y: -5, scale: 1.15 }}
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href={`mailto:${email}`}
              aria-label="Email"
              whileHover={{ y: -5, scale: 1.15 }}
            >
              <Mail />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* HERO VISUAL: PROFILE PHOTO ABOVE 3D ANIMATION */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* PROFILE PHOTO FIRST */}

          <motion.div
            className="hero-portrait"
            initial={{ opacity: 0, y: 35, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
          >
            <img
              src={profileImage}
              alt="Portrait of Arun Putani"
              onError={(event) => {
                console.error(
                  "Profile image could not be loaded:",
                  event.currentTarget.src
                );
              }}
            />

           
          </motion.div>

          {/* 3D ANIMATION SECOND */}

          <div className="hero-scene-container">
            <HeroScene />
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}

      <section className="section" id="about">
        <p className="section-label">01 / ABOUT ME</p>

        <h2>
          CURIOUS MIND.
          <br />
          <span>TECH-DRIVEN FUTURE.</span>
        </h2>

        <p className="about-description">
          I'm an Electronics and Communication Engineering student
          passionate about programming, artificial intelligence,
          embedded systems and technology. I enjoy learning new
          concepts and building practical projects.
        </p>
      </section>

      {/* SKILLS */}

      <section className="section skills-section" id="skills">
        <p className="section-label">02 / TECH STACK</p>

        <h2>
          MY <span>TECHNICAL SKILLS</span>
        </h2>

        <p className="about-description">
          Technologies and tools I'm learning and using to build
          practical engineering and software projects.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <motion.div
              className="skill-category"
              key={skill.title}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{skill.title}</h3>

              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section className="section" id="projects">
        <p className="section-label">03 / SELECTED WORK</p>

        <h2>
          FEATURED <span>PROJECTS</span>
        </h2>

        <p className="about-description">
          A collection of my engineering, programming and
          machine learning projects.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
            >
              <p className="project-number">0{index + 1}</p>

              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FaGithub size={16} />
                    GitHub
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="project-coming-soon">
                    Repository coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* INTERNSHIPS */}

      <section className="section" id="internships">
        <p className="section-label">04 / EXPERIENCE</p>

        <h2>
          MY <span>INTERNSHIPS</span>
        </h2>

        <motion.div className="project-card" whileHover={{ y: -6 }}>
          <p className="project-category">
            PYTHON WITH AI · EWB COURSES
          </p>

          <h3>Python with AI Internship</h3>

          <p className="project-description">
            Completed a one-month internship focused on Python
            programming and artificial intelligence. Developed a
            Student Performance Prediction System.
          </p>
        </motion.div>

        <motion.div
          className="project-card"
          style={{ marginTop: "20px" }}
          whileHover={{ y: -6 }}
        >
          <p className="project-category">
            WEB DEVELOPMENT · COGNIFYZ
          </p>

          <h3>Web Development Intern</h3>

          <p className="project-description">
            Received an internship offer for a Web Development
            Intern position. Practical experience and completed
            tasks will be updated after the internship.
          </p>
        </motion.div>
      </section>

      {/* CERTIFICATES */}

      <section className="section skills-section" id="certificates">
        <p className="section-label">05 / ACHIEVEMENTS</p>

        <h2>
          MY <span>CERTIFICATES</span>
        </h2>

        <p className="about-description">
          Certifications and achievements from my learning journey.
        </p>

        <div className="certificate-grid">
          <motion.article
            className="certificate-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="certificate-icon">🏆</div>

            <p className="project-category">
              EWB COURSES · 2026
            </p>

            <h3>Python with AI Internship</h3>

            <p className="project-description">
              Successfully completed a one-month internship
              focused on Python programming and Artificial
              Intelligence.
            </p>

            <div className="certificate-details">
              <p>
                <strong>Certificate ID:</strong>
                <br />
                EWB/INT/2026/2672
              </p>

              <p>
                <strong>Duration:</strong>
                <br />
                1 Month
              </p>
            </div>

            <div className="certificate-preview">
              <iframe
                src={certificate}
                title="Python with AI Internship Certificate"
                width="100%"
                height="450"
              />
            </div>

            <div className="certificate-buttons">
              <a
                href={certificate}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                VIEW FULL CERTIFICATE ↗
              </a>

              <a
                href={certificate}
                download
                className="secondary-button"
              >
                <Download size={16} />
                DOWNLOAD
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      {/* EDUCATION */}

      <section className="section education-section" id="education">
        <p className="section-label">06 / MY JOURNEY</p>

        <h2>
          EDUCATION <span>& LEARNING</span>
        </h2>

        <p className="about-description">
          My academic journey and continuous technical learning.
        </p>

        <div className="education-timeline">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot" />

            <div className="education-card">
              <span className="education-year">
                CURRENTLY PURSUING
              </span>

              <h3>
                Electronics and Communication Engineering
              </h3>

              <p className="education-institution">
                Undergraduate Student
              </p>

              <p>
                Building a strong foundation in electronics,
                digital systems, communication engineering,
                programming and emerging technologies.
              </p>

              <div className="tech-tags">
                <span>Electronics</span>
                <span>Programming</span>
                <span>Communication</span>
                <span>Embedded Systems</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-dot" />

            <div className="education-card">
              <span className="education-year">
                CONTINUOUS LEARNING
              </span>

              <h3>Technical Skills & Certifications</h3>

              <p className="education-institution">
                Independent Learning
              </p>

              <p>
                Exploring Python, machine learning, web
                development, Arduino and practical electronics
                through projects and technical learning.
              </p>

              <div className="tech-tags">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>React</span>
                <span>Arduino</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESUME */}

      <section className="section resume-section" id="resume">
        <p className="section-label">07 / MY PROFILE</p>

        <h2>
          MY <span>RESUME</span>
        </h2>

        <p className="about-description">
          Interested in my technical background, projects and
          skills? Explore my resume.
        </p>

        <div className="resume-card">
          <div>
            <h3>ARUN PUTANI</h3>

            <p className="project-description">
              Electronics & Communication Engineering Student
            </p>
          </div>

          <div className="resume-buttons">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              VIEW RESUME
              <ExternalLink size={16} />
            </a>

            <a
              href={resume}
              download
              className="secondary-button"
            >
              <Download size={16} />
              DOWNLOAD
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="section contact-section" id="contact">
        <p className="section-label">08 / GET IN TOUCH</p>

        <h2>
          LET'S BUILD
          <br />
          <span>SOMETHING GREAT.</span>
        </h2>

        <p className="about-description">
          Have an opportunity, collaboration or interesting
          project in mind? Feel free to connect with me.
        </p>

        <motion.a
          href={`mailto:${email}`}
          className="primary-button"
          whileHover={{ scale: 1.06, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send size={17} />
          SEND ME AN EMAIL
        </motion.a>

        <div className="social-links">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a href={`mailto:${email}`} aria-label="Email">
            <Mail />
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <a href="#home" className="logo">
          AP<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Arun Putani.
          All Rights Reserved.
        </p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </>
  );
}

export default App;