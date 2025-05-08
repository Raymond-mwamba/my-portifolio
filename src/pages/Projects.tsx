import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'A sample project description' },
    { id: 2, title: 'Project 2', description: 'Another sample project description' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects