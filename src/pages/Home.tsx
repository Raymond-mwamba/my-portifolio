import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm a Full Stack Developer passionate about creating amazing web experiences.</p>
    </motion.div>
  )
}

export default Home