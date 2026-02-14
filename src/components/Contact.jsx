import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '80px var(--padding-x) 120px',
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
      }}
    >
      <FadeIn>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '32px',
        }}>
          Contact
        </p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
          fontWeight: 400,
          lineHeight: 1.35,
          letterSpacing: '-0.02em',
          marginBottom: '32px',
          maxWidth: '520px',
        }}>
          Let's work together on your next project.
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p style={{
          fontSize: '0.9375rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          marginBottom: '40px',
          maxWidth: '480px',
        }}>
          I'm currently open to new opportunities and collaborations.
          Feel free to reach out if you have a project in mind or just
          want to say hello.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <a
          href="mailto:ibra@11th.vision"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-text)',
            padding: '12px 24px',
            borderRadius: '28px',
            backgroundColor: 'var(--color-text)',
            color: '#e0e8df',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Get in touch
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginTop: '1px' }}>
            <path d="M1 13L13 1M13 1H5M13 1v8" />
          </svg>
        </a>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div style={{
          display: 'flex',
          gap: '24px',
          marginTop: '48px',
          paddingTop: '32px',
          borderTop: '1px solid var(--color-border)',
        }}>
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com' },
            { label: 'Dribbble', href: 'https://dribbble.com' },
            { label: 'Twitter', href: 'https://twitter.com' },
            { label: 'Read.cv', href: 'https://read.cv' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--color-text)'}
              onMouseLeave={e => e.target.style.color = 'var(--color-text-secondary)'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
