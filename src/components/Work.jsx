const media = [
  { type: 'img', src: '/projects/1.png' },
  { type: 'img', src: '/projects/2.png' },
  { type: 'img', src: '/projects/3.png' },
  { type: 'img', src: '/projects/4.png' },
  { type: 'img', src: '/projects/5.png' },
  { type: 'img', src: '/projects/6.png' },
  { type: 'img', src: '/projects/7.png' },
  { type: 'img', src: '/projects/8.png' },
  { type: 'img', src: '/projects/9.png' },
  { type: 'video', src: '/projects/printer.mp4' },
  { type: 'img', src: '/projects/11.png' },
  { type: 'img', src: '/projects/12.png' },
  { type: 'img', src: '/projects/13.png' },
  { type: 'video', src: '/projects/onboarding.mp4' },
  { type: 'img', src: '/projects/15.png' },
  { type: 'img', src: '/projects/16.png' },
  { type: 'img', src: '/projects/17.png' },
  { type: 'img', src: '/projects/18.png' },
  { type: 'img', src: '/projects/19.png' },
  { type: 'img', src: '/projects/20.png' },
  { type: 'img', src: '/projects/21.png' },
  { type: 'img', src: '/projects/22.png' },
  { type: 'img', src: '/projects/23.png' },
  { type: 'img', src: '/projects/24.png' },
  { type: 'img', src: '/projects/25.png' },
  { type: 'img', src: '/projects/26.png' },
]

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: '0 4px 120px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '4px',
        }}
      >
        {media.map((item, i) =>
          item.type === 'video' ? (
            <video
              key={item.src}
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '12px',
              }}
            />
          ) : (
            <img
              key={item.src}
              src={item.src}
              alt={`Cubby — screen ${i + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '12px',
              }}
            />
          )
        )}
      </div>

      <style>{`
        @media (max-width: 560px) {
          #work > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
