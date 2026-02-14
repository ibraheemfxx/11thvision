import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const contactLinks = [
  { label: 'Email', href: 'mailto:ibra@11th.vision' },
  { label: 'Telegram', href: 'https://t.me/ibra' },
  { label: 'X', href: 'https://x.com/11ibraaa' },
]

function getTorontoInfo() {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    timeZone: 'America/Toronto',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
  const hour = parseInt(
    now.toLocaleTimeString('en-US', {
      timeZone: 'America/Toronto',
      hour: 'numeric',
      hour12: false,
    })
  )
  const isSleeping = hour >= 20 || hour < 7
  return { time, isSleeping }
}

function useTime() {
  const [info, setInfo] = useState(getTorontoInfo)
  useEffect(() => {
    const id = setInterval(() => setInfo(getTorontoInfo()), 1000)
    return () => clearInterval(id)
  }, [])
  return info
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { time } = useTime()
  const menuRef = useRef(null)

  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu()
      }
    }
    function handleEsc(e) {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [open, closeMenu])

  return (
    <>
      {/* Top bar */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{
          padding: '0 var(--padding-x)',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <span style={{
          fontSize: '0.8125rem',
          color: 'var(--color-text-tertiary)',
          fontVariantNumeric: 'tabular-nums',
        }}>
          Toronto, {time} EST
        </span>
        <a
          href="mailto:ibra@11th.vision"
          style={{
            fontSize: '0.8125rem',
            color: 'var(--color-text-secondary)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--color-text)'}
          onMouseLeave={e => e.target.style.color = 'var(--color-text-secondary)'}
        >
          ibra@11th.vision
        </a>
      </motion.header>

      {/* Floating contact morph button */}
      <div style={{
        position: 'fixed',
        bottom: '32px',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        pointerEvents: 'none',
      }}>
        <motion.div
          ref={menuRef}
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            width: open ? 240 : 'auto',
            height: open ? 200 : 44,
            borderRadius: open ? 16 : 22,
          }}
          transition={{
            y: { duration: 0.5, delay: 0.6 },
            opacity: { duration: 0.5, delay: 0.6 },
            width: { type: 'spring', stiffness: 500, damping: 40, mass: 0.7 },
            height: { type: 'spring', stiffness: 500, damping: 40, mass: 0.7 },
            borderRadius: { type: 'spring', stiffness: 500, damping: 40, mass: 0.7 },
          }}
          style={{
            pointerEvents: 'auto',
            backgroundColor: 'rgba(20,20,20,0.95)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            cursor: open ? 'default' : 'pointer',
          }}
          onClick={() => !open && setOpen(true)}
        >
          {/* Collapsed: Contact label */}
          <AnimatePresence>
            {!open && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: '#fff',
                  padding: '0 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  userSelect: 'none',
                }}
              >
                Contact
              </motion.span>
            )}
          </AnimatePresence>

          {/* Expanded: contact links */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '16px',
                  gap: '4px',
                  flex: 1,
                }}
              >
                <p style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                  padding: '0 8px',
                }}>
                  Get in touch
                </p>
                {contactLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.8)',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      transition: 'background-color 0.15s, color 0.15s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                    }}
                  >
                    <ContactIcon type={link.label} />
                    {link.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

function ContactIcon({ type }) {
  const size = 16
  if (type === 'Email') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13L2 4" />
      </svg>
    )
  }
  if (type === 'Telegram') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    )
  }
  if (type === 'X') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  }
  return null
}
