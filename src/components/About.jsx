import FadeIn from './FadeIn'

export default function About() {
  return (
    <section
      id="about"
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
          marginBottom: '32px',
        }}>
          About
        </p>
      </FadeIn>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: '56px',
        alignItems: 'start',
      }}>
        <div>
          <FadeIn delay={0.05}>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: 'var(--color-text)',
              marginBottom: '20px',
            }}>
              Hello! I'm a product designer passionate about creating digital
              experiences that are both beautiful and functional. I believe great
              design lives at the intersection of clarity and delight.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: 'var(--color-text)',
              marginBottom: '20px',
            }}>
              With experience spanning brand identity, UI/UX, and design systems,
              I bring a holistic approach to every project. I've worked with
              startups and established companies to bring their visions to life.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p style={{
              fontSize: '0.875rem',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
            }}>
              When I'm not designing, you'll find me exploring new tools,
              reading about cognitive psychology, or sketching in my notebook.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div>
            <img
              src="/headshot.jpg"
              alt="Ibraheem Mohammedally"
              style={{
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: '12px',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div style={{
          marginTop: '56px',
          paddingTop: '32px',
          borderTop: '1px solid var(--color-border)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '24px',
        }}>
          {[
            { label: 'Design', items: ['Figma', 'Prototyping', 'Visual Design'] },
            { label: 'Research', items: ['User Research', 'Usability Testing', 'Workshops'] },
            { label: 'Systems', items: ['Design Systems', 'Interaction Design', 'Accessibility'] },
          ].map(group => (
            <div key={group.label}>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                marginBottom: '12px',
                letterSpacing: '0.04em',
              }}>
                {group.label}
              </p>
              {group.items.map(item => (
                <p key={item} style={{
                  fontSize: '0.8125rem',
                  color: 'var(--color-text)',
                  lineHeight: 1.8,
                }}>
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
