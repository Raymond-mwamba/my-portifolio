import MobileNav from './components/MobileNav';
import ContactForm from './components/ContactForm';
import './App.css';
import profileImg from './assets/profile.jpg';

function App() {
  // Dark blue theme should now be working!
  return (
    <>
      <div className="container-fluid px-0">
        {/* Desktop Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top d-none d-lg-block">
          <div className="container">
            <a className="navbar-brand fw-bold fs-4" href="#hero">Raymond Mwamba</a>
            <div className="navbar-nav ms-auto">
              <a className="nav-link mx-2 fw-medium" href="#hero">Hero</a>
              <a className="nav-link mx-2 fw-medium" href="#about">About Me</a>
              <a className="nav-link mx-2 fw-medium" href="#projects">Projects</a>
              <a className="nav-link mx-2 fw-medium" href="#skills">Skills</a>
              <a className="nav-link mx-2 fw-medium" href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav />

        {/* Main Content with proper top padding for fixed navbar */}
        <main className="main-content">
          {/* Hero Section */}
          <section id="hero" className="hero-section">
            <div className="container">
              <div className="row align-items-center min-vh-75 py-5 flex-lg-row flex-column-reverse">
                <div className="col-lg-4 col-md-5 text-center order-1 order-lg-0 mb-4 mb-md-0">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="profile-picture glow rounded-circle img-fluid border shadow-lg float-animation glow-on-hover"
                    style={{
                      width: 'min(300px, 80vw)',
                      height: 'min(300px, 80vw)',
                      objectFit: 'cover',
                      maxWidth: '300px',
                      maxHeight: '300px',
                    }}
                  />
                </div>
                <div className="col-lg-8 col-md-7 text-center text-md-start order-2 order-lg-1">
                  <div className="hero-content">
                    <h1 className="hero-title display-3 fw-bold mb-4 gradient-text">Raymond Mwamba</h1>
                    <p className="hero-subtitle lead fs-4 mb-5" style={{ color: 'var(--text-secondary)' }}>
                      Hi, I'm a Web Developer passionate about creating amazing web experiences with modern technologies.
                    </p>
                    <div className="hero-buttons d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                      <a href="https://github.com/Raymond-Mwamba" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg d-flex align-items-center gap-2 glow-on-hover social-btn" aria-label="GitHub">
                        <i className="bi bi-github"></i> <span>GitHub</span>
                      </a>
                      <a href="https://wa.me/255753371512" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg d-flex align-items-center gap-2 glow-on-hover social-btn" aria-label="WhatsApp">
                        <i className="bi bi-whatsapp"></i> <span>WhatsApp</span>
                      </a>
                      <a href="mailto:mwambah92@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg d-flex align-items-center gap-2 pulse-animation social-btn" aria-label="Email">
                        <i className="bi bi-envelope"></i> <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="content-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="section-header text-center mb-5">
                    <h2 className="section-title display-5 fw-bold gradient-text">About Me</h2>
                    <div className="section-divider mx-auto"></div>
                  </div>
                  <div className="card border-0 shadow-lg glow-on-hover about-card">
                    <div className="card-body p-4 p-md-5">
                      <div className="row align-items-center">
                        <div className="col-12">
                          <p className="about-text fs-5 lh-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
                            I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
                            With a passion for clean code and user-centered design, I create digital experiences that are both beautiful and functional.
                          </p>
                          <p className="about-text fs-5 lh-lg mb-0" style={{ color: 'var(--text-secondary)' }}>
                            I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible on the web.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="content-section">
            <div className="container">
              <div className="section-header text-center mb-5">
                <h2 className="section-title display-5 fw-bold gradient-text">Projects</h2>
                <div className="section-divider mx-auto"></div>
                <p className="section-subtitle lead mt-3" style={{ color: 'var(--text-secondary)' }}>
                  Here are some of my recent projects that showcase my skills and experience
                </p>
              </div>
              <div className="row g-4 justify-content-center">
                <div className="col-lg-6 col-xl-5">
                  <div className="card project-card h-100 border-0 shadow-lg hover-shadow glow-on-hover">
                    <div className="card-body p-4 p-md-5">
                      <div className="project-content">
                        <h5 className="card-title project-title fw-bold mb-3" style={{ color: 'var(--accent-blue)' }}>
                          Comprehensive School Management System for Secondary Education
                        </h5>
                        <p className="card-text project-description mb-4" style={{ color: 'var(--text-secondary)' }}>
                          This is a web-based School Management System designed specifically for secondary schools, enabling efficient administration, student management and academic tracking. This project current I'm doing with my team, not my self soon will be released 🙏🏾
                        </p>
                        <div className="project-tech d-flex gap-2 flex-wrap">
                          <span className="badge tech-badge">PHP</span>
                          <span className="badge tech-badge">JavaScript</span>
                          <span className="badge tech-badge">MySQL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-5">
                  <div className="card project-card h-100 border-0 shadow-lg hover-shadow glow-on-hover">
                    <div className="card-body p-4 p-md-5">
                      <div className="project-content">
                        <h5 className="card-title project-title fw-bold mb-3" style={{ color: 'var(--accent-blue)' }}>
                          Industrial Practical Training Management Platform
                        </h5>
                        <p className="card-text project-description mb-4" style={{ color: 'var(--text-secondary)' }}>
                          A comprehensive web-based student portal system designed to manage IPT activities. The system provides a centralized platform for students to manage their IPT applications, track training progress through digital logbooks and maintain records of their practical learning.
                        </p>
                        <div className="project-tech d-flex gap-2 flex-wrap mb-4">
                          <span className="badge tech-badge">PHP</span>
                          <span className="badge tech-badge">Bootstrap</span>
                          <span className="badge tech-badge">MySQL</span>
                        </div>
                        <div className="project-actions">
                          <a href="https://assignment-task.iceiy.com" target="_blank" rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-lg d-inline-flex align-items-center gap-2 project-btn">
                            <i className="bi bi-globe"></i>
                            Visit Live Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-5">
            <div className="container">
              <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Skills</h2>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <span className="badge fs-6 p-3 glow-on-hover">Frontend Development</span>
                    <span className="badge fs-6 p-3 glow-on-hover">React</span>
                    <span className="badge fs-6 p-3 glow-on-hover">TypeScript</span>
                    <span className="badge fs-6 p-3 glow-on-hover">Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Contact Me</h2>
                  <div className="card border-0 shadow-lg glow-on-hover">
                    <div className="card-body p-5">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="footer mt-5 py-4 text-center">
        <div className="container">
          <span style={{ color: 'var(--text-secondary)' }}>© {new Date().getFullYear()} M.R tech solutions. All rights reserved.</span>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/255753371512?text=Hello%20Raymond!%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}

export default App;
