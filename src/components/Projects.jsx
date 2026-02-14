import FadeIn from './FadeIn'

const images = [
  { src: '/projects/1.png', span: 'full' },
  { src: '/projects/2.png', span: 'full' },
  { src: '/projects/3.png', span: 'full' },
  { src: '/projects/4.png', span: 'full' },
  { src: '/projects/5.png', span: 'full' },
  { src: '/projects/6.png', span: 'full' },
  { src: '/projects/7.png', span: 'full' },
  { src: '/projects/8.png', span: 'full' },
  { src: '/projects/9.png', span: 'full' },
  { src: '/projects/10.png', span: 'full' },
  { src: '/projects/11.png', span: 'full' },
  { src: '/projects/12.png', span: 'full' },
  { src: '/projects/13.png', span: 'full' },
  { src: '/projects/14.png', span: 'full' },
  { src: '/projects/15.png', span: 'full' },
]

export default function Projects() {
  return (
    <section
      id="work"
      style={{
        padding: '80px var(--padding-x)',
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
          marginBottom: '12px',
        }}>
          Selected Work
        </p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          fontWeight: 500,
          letterSpacing: '-0.025em',
          marginBottom: '8px',
        }}>
          Cubby
        </h2>
        <p style={{
          fontSize: '0.9375rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          marginBottom: '40px',
          maxWidth: '520px',
        }}>
          An AI-powered study platform for law students — exam prep, course outlines,
          quizzes, and professor-calibrated feedback, all in one place.
        </p>
      </FadeIn>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {images.map((img, i) => (
          <FadeIn key={img.src} delay={i < 3 ? i * 0.05 : 0}>
            <img
              src={img.src}
              alt={`Cubby — screen ${i + 1}`}
              loading={i < 2 ? 'eager' : 'lazy'}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                display: 'block',
              }}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
