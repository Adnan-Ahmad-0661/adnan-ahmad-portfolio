import { useState } from "react";
import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaPhone,
  FaJava,
  FaReact,
  FaDatabase,
  FaCode,
  FaServer,
  FaGraduationCap,
  FaDownload,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaShieldAlt,
  FaPlane,
  FaLaptopCode,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaTools,
  FaBriefcase,
  FaIdBadge,
  FaBullseye,
  FaCertificate,
} from "react-icons/fa";

function App() {

  const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

  const profile = asset("profile.jpg");

  const [showProjectGallery, setShowProjectGallery] = useState(false);

  const projectScreenshots = [
    { src: asset("project-images/01-home-flight-search.png"), title: "Flight Search & Booking", description: "Home page with flight search, route selection, date and passenger options." },
    { src: asset("project-images/02-my-profile.png"), title: "User Profile", description: "Profile page showing account information, role, status and login details." },
    { src: asset("project-images/03-create-user.png"), title: "Create User", description: "Admin account creation screen with role selection and profile photo upload." },
    { src: asset("project-images/04-my-bookings.png"), title: "My Bookings", description: "Booking management page with PNR, seat, passenger and ticket actions." },
    { src: asset("project-images/05-admin-dashboard.png"), title: "Admin Dashboard", description: "Admin dashboard for flights, bookings, users and system management." },
  ];

  const skills = [
    {
      title: "Java",
      icon: <FaJava />,
      level: "90%",
      type: "java",
    },
    {
      title: "Spring Boot",
      icon: <FaServer />,
      level: "88%",
      type: "backend",
    },
    {
      title: "Spring MVC",
      icon: <FaCode />,
      level: "85%",
      type: "backend",
    },
    {
      title: "Spring Security",
      icon: <FaShieldAlt />,
      level: "82%",
      type: "security",
    },
    {
      title: "Hibernate / JPA",
      icon: <FaDatabase />,
      level: "85%",
      type: "database",
    },
    {
      title: "MySQL",
      icon: <FaDatabase />,
      level: "88%",
      type: "database",
    },
    {
      title: "React.js",
      icon: <FaReact />,
      level: "78%",
      type: "react",
    },
    {
      title: "REST API",
      icon: <FaCode />,
      level: "90%",
      type: "api",
    },
    {
      title: "JWT",
      icon: <FaShieldAlt />,
      level: "82%",
      type: "security",
    },
    {
      title: "Git / GitHub",
      icon: <FaGitAlt />,
      level: "85%",
      type: "git",
    },
    {
      title: "JavaScript",
      icon: <FaJs />,
      level: "75%",
      type: "javascript",
    },
    {
      title: "HTML / CSS",
      icon: <FaHtml5 />,
      level: "85%",
      type: "frontend",
    },
  ];

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.Name.value.trim();
    const email = form.Email.value.trim();
    const message = form.Message.value.trim();

    const text = `Hello Adnan,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/918874670661?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    form.reset();
  };

  return (
    <div className="portfolio">

      {/* ================= BACKGROUND ================= */}

      <div className="space-background">
        <div className="stars stars-one"></div>
        <div className="stars stars-two"></div>
        <div className="stars stars-three"></div>

        <span className="space-dot dot-1"></span>
        <span className="space-dot dot-2"></span>
        <span className="space-dot dot-3"></span>
        <span className="space-dot dot-4"></span>
        <span className="space-dot dot-5"></span>
        <span className="space-dot dot-6"></span>

        <div className="light-line line-one"></div>
        <div className="light-line line-two"></div>
        <div className="light-line line-three"></div>
      </div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          <span>ADNAN</span>
          <small>AHMAD</small>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <a
            href="/resume.pdf"
            download="Adnan-Ahmad-Resume.pdf"
            className="resume-nav"
          >
            <FaDownload />
            Resume
          </a>
        </div>

      </nav>

      {/* ================= HOME ================= */}

      <section id="home" className="home-section">

        <div className="home-left">

          <p className="home-small-title">WELCOME TO MY PORTFOLIO</p>

          <h1 className="hero-name">
            Adnan Ahmad
          </h1>

          <h2>
            Java Developer
          </h2>

          <p className="home-description">
            I develop secure, scalable and user-focused web applications
            with Java, Spring Boot, REST APIs, MySQL and React.js.
            I enjoy turning real-world requirements into clean, reliable
            and maintainable software through practical project development.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="primary-button">
              View My Work
              <FaArrowRight />
            </a>

            <a href="#contact" className="outline-button">
              Get In Touch
            </a>

            <a
              href="/resume.pdf"
              download="Adnan-Ahmad-Resume.pdf"
              className="outline-button"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="home-social">

            <a
              href="https://github.com/Adnan-Ahmad-0661"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/adnan-ahmad-216a0b392/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/918874670661"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://t.me/its_chaudhary_adnan_0661"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>

            <a href="mailto:ahmadadnan8533@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* HOME VISUAL - NO PHOTO */}

        <div className="home-right">

          <div className="earth-system">

            <div className="earth-glow"></div>

            <div className="earth">
              <div className="earth-land land-one"></div>
              <div className="earth-land land-two"></div>
              <div className="earth-land land-three"></div>
              <div className="earth-land land-four"></div>
            </div>

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <span className="orbit-point point-one"></span>
            <span className="orbit-point point-two"></span>

          </div>

          <div className="floating-code code-one">
            JAVA
          </div>

          <div className="floating-code code-two">
            SPRING
          </div>

          <div className="floating-code code-three">
            REST API
          </div>

          <div className="floating-code code-four">
            MYSQL
          </div>

        </div>

        <div className="scroll-down">
          <span>SCROLL DOWN</span>
          <div className="scroll-arrow"></div>
        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Who I Am</h2>
          <span>
            A passionate Java Developer focused on building real-world applications.
          </span>
        </div>

        <div className="about-container">

          <div className="about-photo">

            <div className="photo-orbit"></div>

            <div className="photo-wrapper">
              <img
                src={profile}
                alt="Adnan Ahmad"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="photo-badge">
              <FaJava />
              Java Developer
            </div>

          </div>

          <div className="about-content">

            <div className="glass-card">

              <h3>
                <span className="heading-line"></span>
                Who I Am
              </h3>

              <p>
                I am a Java Developer with a strong interest in
                backend and full-stack application development.
                I enjoy creating reliable and scalable applications
                using modern Java technologies.
              </p>

              <p>
                My primary technologies include Java, Spring Boot,
                Spring MVC, Spring Security, Hibernate, JPA,
                REST APIs and MySQL.
              </p>

              <p>
                I also work with React.js to create responsive
                and user-friendly frontend interfaces.
              </p>

            </div>

            <div className="glass-card mission-card">

              <h3>
                <span className="heading-line"></span>
                My Mission
              </h3>

              <p>
                My mission is to build secure, scalable and user-focused
                software while continuously improving my Java, Spring Boot
                and full-stack development skills through practical projects.
              </p>

              <div className="mission-highlight">
                <FaBullseye />
                <span>Learn. Build. Improve. Deliver.</span>
              </div>

            </div>

            <div className="glass-card">

              <h3>
                <span className="heading-line"></span>
                What I Do
              </h3>

              <div className="about-services">

                <div>
                  <FaServer />
                  <span>Backend Development</span>
                </div>

                <div>
                  <FaCode />
                  <span>REST API Development</span>
                </div>

                <div>
                  <FaDatabase />
                  <span>Database Integration</span>
                </div>

                <div>
                  <FaReact />
                  <span>Frontend Development</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Skills & Technologies</h2>
          <span>My development toolkit</span>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
            >

              <div className={`skill-icon ${skill.type}`}>
                {skill.icon}
              </div>

              <div className="skill-details">

                <div className="skill-top">
                  <h3>{skill.title}</h3>
                  <span>{skill.level}</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: skill.level }}
                  ></div>
                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="technology-strip">

          <span><FaJava /> Java</span>
          <span><FaServer /> Spring Boot</span>
          <span><FaDatabase /> MySQL</span>
          <span><FaReact /> React</span>
          <span><FaGitAlt /> Git</span>
          <span><FaTools /> Maven</span>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section experience-section">

        <div className="section-heading">
          <p>MY JOURNEY</p>
          <h2>Experience</h2>
          <span>Projects and practical development experience</span>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaLaptopCode />
            </div>

            <div className="timeline-card">

              <div className="timeline-top">
                <div>
                  <h3>Fresher — Self Projects</h3>
                  <p>Java Developer | Project-Based Development</p>
                </div>

                <span>2025 - Present</span>
              </div>

              <p>
                As a fresher, I have focused on building practical
                self-projects to strengthen my backend and full-stack
                development skills using Java, Spring Boot, Spring Security,
                Hibernate, MySQL and React.js.
              </p>

              <div className="tag-list">
                <span>Fresher</span>
                <span>Self Projects</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React.js</span>
              </div>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaCode />
            </div>

            <div className="timeline-card">

              <div className="timeline-top">
                <div>
                  <h3>Practical Development</h3>
                  <p>Spring Ecosystem & REST APIs</p>
                </div>

                <span>Project Work</span>
              </div>

              <p>
                Built and practiced REST APIs, authentication and
                authorization with JWT, Spring MVC, Spring JDBC,
                Hibernate/JPA and MySQL through hands-on applications.
              </p>

              <div className="tag-list">
                <span>Spring MVC</span>
                <span>Spring Security</span>
                <span>JWT</span>
                <span>Hibernate/JPA</span>
                <span>REST API</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section education-section">

        <div className="section-heading">
          <p>MY EDUCATION</p>
          <h2>Education</h2>
          <span>Academic background and learning journey</span>
        </div>

        <div className="education-card">

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">

            <div className="education-top">

              <div>
                <h3>Bachelor of Computer Applications</h3>

                <p className="university">
                  Siddharth University
                </p>
              </div>

              <span className="education-year">
                2022 - 2025
              </span>

            </div>

            <p className="education-description">
              Bachelor of Computer Applications graduate with a strong
              foundation in programming, database management, web development
              and software engineering. Focused on Java-based backend development,
              REST APIs, Spring technologies and full-stack application development
              through practical self-projects.
            </p>

            <div className="education-tags">
              <span>Computer Applications</span>
              <span>Java</span>
              <span>Database</span>
              <span>Web Development</span>
              <span>Software Engineering</span>
            </div>

          </div>

        </div>

        <div className="education-card education-secondary-card">

          <div className="education-icon diploma-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">

            <div className="education-top">

              <div>
                <h3>Diploma in Homeopathic Pharmacy</h3>

                <p className="university">
                  Professional Diploma
                </p>
              </div>

              <span className="education-year">
                2020 - 2022
              </span>

            </div>

            <p className="education-description">
              Completed a professional diploma focused on the fundamentals
              of homeopathic pharmacy, medicines, dispensing practices and
              basic pharmaceutical knowledge.
            </p>

            <div className="education-tags">
              <span>Homeopathic Pharmacy</span>
              <span>Pharmacy Basics</span>
              <span>Dispensing</span>
            </div>

          </div>

        </div>

        <div className="education-bottom school-results">

          <div className="education-small-card">
            <h3>Class 12</h3>
            <p>Uttar Pradesh Board • 57%</p>
            <span>Higher secondary education with a foundation in academic subjects and continued learning.</span>
          </div>

          <div className="education-small-card">
            <h3>Class 10</h3>
            <p>Uttar Pradesh Board • 67%</p>
            <span>Secondary education that built a strong academic foundation and basic learning skills.</span>
          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section id="certifications" className="section certification-section">

        <div className="section-heading">
          <p>ADDITIONAL QUALIFICATIONS</p>
          <h2>Certifications</h2>
          <span>Additional learning and professional credentials</span>
        </div>

        <div className="certification-grid">

          <div className="certification-card">
            <div className="certification-icon"><FaCertificate /></div>
            <div>
              <h3>Tally ERP9</h3>
              <p>Training in accounting software, business transactions and basic financial record management.</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-icon"><FaCertificate /></div>
            <div>
              <h3>CCC</h3>
              <p>Computer literacy certification covering fundamental computer, internet and digital application skills.</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-icon"><FaCertificate /></div>
            <div>
              <h3>Scout Guide</h3>
              <p>Learning experience focused on discipline, teamwork, leadership, responsibility and practical activities.</p>
            </div>
          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">

        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
          <span>Some applications I have built</span>
        </div>

        <div className="projects-grid">

          <div className="project-card">

            <div className="project-icon">
              <FaPlane />
            </div>

            <div className="project-header">

              <div>
                <h3>Airline Reservation System</h3>
                <p>Full-Stack Web Application</p>
              </div>

              <FaJava className="project-java" />

            </div>

            <p className="project-description">
              A full-stack airline reservation system where users
              can search flights, book tickets, manage bookings
              and cancel tickets.
            </p>

            <p className="project-description">
              Includes JWT authentication, role-based authorization,
              admin dashboard, flight management and user management.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>MySQL</span>
              <span>JWT</span>
              <span>Hibernate</span>
            </div>

            <div className="project-footer project-actions">

              <button
                type="button"
                className="project-gallery-button"
                onClick={() => setShowProjectGallery(true)}
              >
                <FaLaptopCode />
                View Project Screenshots
                <span>5</span>
              </button>

              <a
                href="https://github.com/Adnan-Ahmad-0661/Airline_Reservation"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub />
                View on GitHub
                <FaArrowRight />
              </a>

            </div>

          </div>

          <div className="project-card">

            <div className="project-icon">
              <FaShieldAlt />
            </div>

            <div className="project-header">

              <div>
                <h3>Authentication & Security</h3>
                <p>Spring Security Project</p>
              </div>

              <FaShieldAlt className="project-java" />

            </div>

            <p className="project-description">
              Authentication and authorization system using
              Spring Security and JWT with protected APIs,
              roles and secure password handling.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Security</span>
              <span>JWT</span>
              <span>MySQL</span>
              <span>REST API</span>
            </div>

          </div>

        </div>

      </section>


      {showProjectGallery && (
        <div className="project-gallery-overlay" onClick={() => setShowProjectGallery(false)}>
          <div className="project-gallery-modal" onClick={(event) => event.stopPropagation()}>
            <div className="project-gallery-header">
              <div>
                <p>PROJECT SHOWCASE</p>
                <h2>Airline Reservation System</h2>
                <span>5 screenshots from the project</span>
              </div>
              <button type="button" className="project-gallery-close" onClick={() => setShowProjectGallery(false)} aria-label="Close project screenshots">×</button>
            </div>
            <div className="project-gallery-grid">
              {projectScreenshots.map((image) => (
                <div className="project-gallery-item" key={image.src}>
                  <div className="project-gallery-image"><img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    onError={(event) => {
                      console.error("Project image not found:", event.currentTarget.src);
                    }}
                  /></div>
                  <div className="project-gallery-caption"><h3>{image.title}</h3><p>{image.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section">

        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Connect</h2>
          <span>
            Have a job opportunity or want to connect?
          </span>
        </div>

        <div className="contact-container">

          <div className="contact-form-card">

            <h3>Send a Message</h3>

            <p className="contact-note">
              Submit your details and message to start a WhatsApp conversation with me.
            </p>

            <form onSubmit={handleMessageSubmit}>

              <label>Name</label>

              <input
                type="text"
                name="Name"
                placeholder="Your name"
                required
              />

              <label>Email</label>

              <input
                type="email"
                name="Email"
                placeholder="your.email@example.com"
                required
              />

              <label>Message</label>

              <textarea
                name="Message"
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>

              <button type="submit">
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

          <div className="contact-info-container">

            <a
              href="mailto:ahmadadnan8533@gmail.com"
              className="contact-card"
            >

              <div className="contact-card-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>ahmadadnan8533@gmail.com</p>
              </div>

            </a>

            <a
              href="tel:+918874670661"
              className="contact-card"
            >

              <div className="contact-card-icon">
                <FaPhone />
              </div>

              <div>
                <h3>Phone</h3>
                <p>+91 8874670661</p>
              </div>

            </a>

            <a
              href="https://wa.me/918874670661"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >

              <div className="contact-card-icon whatsapp">
                <FaWhatsapp />
              </div>

              <div>
                <h3>WhatsApp</h3>
                <p>Chat with me</p>
              </div>

            </a>

            <div className="contact-card">

              <div className="contact-card-icon location">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>

            </div>

            <div className="connect-card">

              <h3>Connect With Me</h3>

              <div className="connect-icons">

                <a
                  href="https://github.com/Adnan-Ahmad-0661"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/adnan-ahmad-216a0b392/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.naukri.com/mnjuser/profile"
                  aria-label="Naukri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBriefcase />
                </a>

                <a
                  href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage"
                  aria-label="Indeed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIdBadge />
                </a>

                <a
                  href="https://wa.me/918874670661"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://t.me/its_chaudhary_adnan_0661"
                  aria-label="Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= RESUME ================= */}

      <section className="resume-section">

        <div className="resume-box">

          <div>
            <p>LOOKING FOR A JAVA DEVELOPER?</p>

            <h2>
              Let's build something great together.
            </h2>

            <span>
              Download my resume to know more about my skills and projects.
            </span>
          </div>

          <a
            href="/resume.pdf"
            download="Adnan-Ahmad-Resume.pdf"
            className="resume-download"
          >
            <FaDownload />
            Download Resume
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          Adnan Ahmad
        </div>

        <p>
          Java Developer | Spring Boot | REST API | MySQL | React.js
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/Adnan-Ahmad-0661"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/adnan-ahmad-216a0b392/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/918874670661"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a href="mailto:ahmadadnan8533@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Adnan Ahmad. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;