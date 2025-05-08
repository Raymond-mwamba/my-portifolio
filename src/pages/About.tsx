import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <p>I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.</p>
        <ul>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Database Design</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default About