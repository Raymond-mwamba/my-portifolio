import { motion } from 'framer-motion';
import MobileNav from './components/MobileNav';
import './App.css';

function App() {
  return (
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
        >
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I'm a Full Stack Developer passionate about creating amazing web experiences.</p>
        </motion.div>
      </section>

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
    </div>
  );
}

export default App;
