import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 56px - 120px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px var(--padding-x) 48px',
        textAlign: 'center',
      }}
    >
      <motion.img
        src="/headshot.jpg"
        alt="Ibraheem Mohammedally"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'center top',
          marginBottom: '16px',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          fontSize: '1.125rem',
          fontWeight: 500,
          color: 'var(--color-text)',
          marginBottom: '4px',
        }}
      >
        Ibraheem Mohammedally
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '32px',
        }}
      >
        Product Designer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <p style={{
          fontSize: '0.6875rem',
          fontWeight: 500,
          color: 'var(--color-text-tertiary)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          Currently
        </p>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          Founding designer at{' '}
          <a
            href="https://cubby.law"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <img
              src="/cubbylogo.svg"
              alt="Cubby"
              style={{ height: '18px' }}
            />
          </a>
        </p>
      </motion.div>
    </section>
  )
}
