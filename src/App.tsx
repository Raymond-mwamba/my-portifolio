import { motion } from 'framer-motion';
import MobileNav from './components/MobileNav';
import './App.css';
import profileImg from './assets/profile.jpg';

function App() {
  return (
    <>
      <div className="app">
        <nav className="desktop-nav">
          <a href="#hero">Hero</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <MobileNav />

        <section id="hero" className="section hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-content"
          >
            <div className="hero-img-wrapper">
              <img
                src={profileImg}
                alt="Profile"
                className="profile-img"
              />
            </div>
            <div className="hero-text">
              <h1>Raymond Mwamba</h1>
              <p>Hi, I'm a Web  Developer passionate about creating amazing web experiences.</p>
              <div className="hero-icons">
                <a href="https://github.com/Raymond-Mwamba" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"></path></svg>
                </a>
                <a href="https://wa.me/255753371512" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" className="footer-icon"><path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.56-1.71c1.87 1.02 3.98 1.56 6.24 1.56h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.06-2.42-2.42-5.64-3.75-9.06-3.75zm0 23.2c-2.01 0-3.98-.54-5.68-1.56l-.41-.24-3.89 1.01 1.04-3.78-.27-.43c-1.08-1.7-1.65-3.67-1.65-5.7 0-5.79 4.71-10.5 10.5-10.5 2.81 0 5.45 1.1 7.43 3.08 1.98 1.98 3.07 4.62 3.07 7.42 0 5.79-4.71 10.5-10.5 10.5zm5.77-7.93c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.23-.69.08-.32-.16-1.36-.5-2.59-1.59-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.53-.54-.71-.55-.18-.01-.4-.01-.62-.01-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.65 0 1.56 1.15 3.06 1.31 3.27.16.21 2.27 3.47 5.51 4.73.77.33 1.37.53 1.84.68.77.25 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.51.27-.74.27-1.37.19-1.51-.08-.14-.29-.21-.61-.37z"></path></svg>
                </a>
                <a href="mailto:mwambah92@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              </div> {/* Closing hero-text div */}
            </div> {/* Closing hero-text div */}
          </motion.div> {/* Closing motion.div */}
        </section> {/* Closing hero section */}

        <section id="about" className="section about">
          <h2>About Me</h2>
          <p>I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.</p>
        </section>

        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <p>Here are some of my recent projects:</p>
          <ul>
            <li>Project 1 - A sample project description</li>
            <li>Project 2 - Another sample project description</li>
          </ul>
        </section>

        <section id="skills" className="section skills">
          <h2>Skills</h2>
          <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Database Design</li>
            <li>UI/UX Design</li>
          </ul>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact Me</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows={5}></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div> {/* Closing app div */}

      <footer className="footer">
        <div>
          © {new Date().getFullYear()} M.R tech solutions. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
