import { motion } from 'framer-motion'

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay, ease: [0.44, 0, 0.56, 1] }}
    >
      {children}
    </motion.div>
  )
}
