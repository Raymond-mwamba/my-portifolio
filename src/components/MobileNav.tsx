import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="mobile-nav">
      <button 
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <motion.div
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="hamburger-line"
        />
        <motion.div
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="hamburger-line"
        />
        <motion.div
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="hamburger-line"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#hero" onClick={toggleMenu}>Hero</a>
            <a href="#about" onClick={toggleMenu}>About Me</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav