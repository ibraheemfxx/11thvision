import FadeIn from './FadeIn'

export default function SectionHeading({ title }) {
  return (
    <FadeIn>
      <p style={{
        fontSize: '0.75rem',
        fontWeight: 500,
        color: 'var(--color-text-secondary)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        marginBottom: '32px',
      }}>
        {title}
      </p>
    </FadeIn>
  )
}
