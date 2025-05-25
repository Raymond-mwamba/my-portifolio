import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <div className="d-lg-none position-fixed" style={{ top: '1rem', right: '1rem', zIndex: 1050 }}>
      <button
        className="btn d-flex flex-column justify-content-center align-items-center p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        style={{
          width: '48px',
          height: '48px',
          border: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-card)',
          borderRadius: '12px',
          boxShadow: '0 4px 16px var(--shadow-color)'
        }}
      >
        <motion.div
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="rounded"
          style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)' }}
        />
        <motion.div
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="rounded my-1"
          style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)' }}
        />
        <motion.div
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="rounded"
          style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)' }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="position-fixed border rounded shadow-lg p-3"
            style={{
              top: '5rem',
              right: '1rem',
              minWidth: '200px',
              zIndex: 1050,
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              boxShadow: '0 16px 48px var(--shadow-color)',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="d-flex flex-column gap-2">
              <a
                href="#hero"
                onClick={toggleMenu}
                className="text-decoration-none fw-medium p-2 rounded"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)'
                  e.currentTarget.style.color = 'var(--bg-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                Hero
              </a>
              <a
                href="#about"
                onClick={toggleMenu}
                className="text-decoration-none fw-medium p-2 rounded"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)'
                  e.currentTarget.style.color = 'var(--bg-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                About Me
              </a>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="text-decoration-none fw-medium p-2 rounded"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)'
                  e.currentTarget.style.color = 'var(--bg-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={toggleMenu}
                className="text-decoration-none fw-medium p-2 rounded"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)'
                  e.currentTarget.style.color = 'var(--bg-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-decoration-none fw-medium p-2 rounded"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)'
                  e.currentTarget.style.color = 'var(--bg-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav