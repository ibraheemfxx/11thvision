import { useEffect } from 'react'
import { motion } from 'framer-motion'

// soft-blur-in: per-character, opacity+y+blur, cubic-bezier(0.22,1,0.36,1)
const softBlurChar = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

// bottom-up-letters: per-character, opacity+y, cubic-bezier(0.18,1,0.32,1)
const bottomUpChar = {
  hidden: { opacity: 0, y: 46 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.18, 1, 0.32, 1] },
  },
}

// "the" = 3 chars, stagger 10ms, duration 0.55s
// last char starts at 2×0.01 = 0.02s, ends at 0.02+0.55 = 0.57s
// "vision" starts at ~0.6s
const THE_DONE_AT = 0.6

function App() {
  useEffect(() => {
    document.title = 'the 11th vision'
  }, [])

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <p style={{
        fontFamily: "'Forevs Demo', serif",
        lineHeight: 1,
        display: 'flex',
        alignItems: 'baseline',
        gap: '12px',
      }}>
        {/* "the" — soft-blur-in */}
        <motion.span
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.01 } } }}
          style={{ display: 'inline-flex', fontSize: '36px', fontStyle: 'normal' }}
        >
          {'the'.split('').map((char, i) => (
            <motion.span key={i} variants={softBlurChar} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
              {char}
            </motion.span>
          ))}
        </motion.span>

        {/* "11th" — no animation */}
        <span style={{ fontSize: '96px', fontStyle: 'italic' }}>11th</span>

        {/* "vision" — bottom-up-letters, starts after "the" */}
        <motion.span
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: THE_DONE_AT } } }}
          style={{ display: 'inline-flex', fontSize: '36px', fontStyle: 'normal', overflow: 'hidden' }}
        >
          {'vision'.split('').map((char, i) => (
            <motion.span key={i} variants={bottomUpChar} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </p>
    </div>
  )
}

export default App
