import MobileNav from './components/MobileNav';
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

        {/* Main Content with minimal top padding for fixed navbar */}
        <main style={{ paddingTop: '8px' }}>
          {/* Hero Section */}
          <section id="hero" className="container py-4 rounded-3">
            <div className="row align-items-center min-vh-75 py-5">
              <div className="col-lg-4 col-md-5 text-center mb-4 mb-md-0">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="rounded-circle img-fluid border border-4 shadow-lg float-animation glow-on-hover"
                  style={{
                    width: 'min(300px, 80vw)',
                    height: 'min(300px, 80vw)',
                    objectFit: 'cover',
                    maxWidth: '300px',
                    maxHeight: '300px',
                    borderColor: 'var(--accent-blue)'
                  }}
                />
              </div>
              <div className="col-lg-8 col-md-7 text-center text-md-start">
                <h1 className="display-3 fw-bold mb-3 gradient-text">Raymond Mwamba</h1>
                <p className="lead fs-4 mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Hi, I'm a Web Developer passionate about creating amazing web experiences with modern technologies.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                  <a href="https://github.com/Raymond-Mwamba" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg d-flex align-items-center gap-2 glow-on-hover" aria-label="GitHub">
                    <i className="bi bi-github"></i> <span>GitHub</span>
                  </a>
                  <a href="https://wa.me/255753371512" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg d-flex align-items-center gap-2 glow-on-hover" aria-label="WhatsApp">
                    <i className="bi bi-whatsapp"></i> <span>WhatsApp</span>
                  </a>
                  <a href="mailto:mwambah92@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg d-flex align-items-center gap-2 pulse-animation" aria-label="Email">
                    <i className="bi bi-envelope"></i> <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="display-5 fw-bold text-center mb-4 gradient-text">About Me</h2>
                  <div className="card border-0 shadow-sm glow-on-hover">
                    <div className="card-body p-4">
                      <p className="fs-5 lh-lg" style={{ color: 'var(--text-secondary)' }}>
                        I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
                        With a passion for clean code and user-centered design, I create digital experiences that are both beautiful and functional.
                      </p>
                      <p className="fs-5 lh-lg mb-0" style={{ color: 'var(--text-secondary)' }}>
                        I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible on the web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-5">
            <div className="container">
              <h2 className="display-5 fw-bold text-center mb-5 gradient-text">Projects</h2>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="card h-100 border-0 shadow-sm hover-shadow glow-on-hover">
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold" style={{ color: 'var(--accent-blue)' }}>Comprehensive School Management System for Secondary Education</h5>
                      <p className="card-text" style={{ color: 'var(--text-secondary)' }}>This is a web-based School Management System designed specifically for secondary schools, enabling efficient administration, student management and academic tracking. This project current I'm doing with my team, not my self soon will be released 🙏🏾</p>
                      <div className="d-flex gap-2 flex-wrap">
                        <span className="badge">PHP</span>
                        <span className="badge">JavaScript</span>
                        <span className="badge">MySQL</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card h-100 border-0 shadow-sm hover-shadow glow-on-hover">
                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold" style={{ color: 'var(--accent-blue)' }}>Idustrial Practical Training Management Platform</h5>
                      <p className="card-text" style={{ color: 'var(--text-secondary)' }}>A comprehensive web-based student portal system designed to manage IPT activities. The system provides a centralized platform for students to manage their IPT applications, track training progress through digital logbooks and maintain records of their practical learning. </p>
                      <div className="d-flex gap-2 flex-wrap mb-3">
                        <span className="badge">PHP</span>
                        <span className="badge">Bootstrap</span>
                        <span className="badge">MySQL</span>
                      </div>
                      <a href="https://assignment-task.iceiy.com" target="_blank" rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm pulse-on-hover d-inline-flex align-items-center gap-2">
                        <i className="bi bi-globe"></i>
                        Visit Live Project
                      </a>
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
                    <span className="badge fs-6 p-3 glow-on-hover">Backend Development</span>
                    <span className="badge fs-6 p-3 glow-on-hover">Database Design</span>
                    <span className="badge fs-6 p-3 glow-on-hover">UI/UX Design</span>
                    <span className="badge fs-6 p-3 glow-on-hover">React</span>
                    <span className="badge fs-6 p-3 glow-on-hover">TypeScript</span>
                    <span className="badge fs-6 p-3 glow-on-hover">Node.js</span>
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
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="name" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Name</label>
                            <input type="text" id="name" name="name" className="form-control form-control-lg" required />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Email</label>
                            <input type="email" id="email" name="email" className="form-control form-control-lg" required />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="message" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Message</label>
                          <textarea id="message" name="message" rows={6} className="form-control form-control-lg" required></textarea>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-lg px-5 py-3 pulse-animation">
                            <i className="bi bi-send me-2"></i>Send Message
                          </button>
                        </div>
                      </form>
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
