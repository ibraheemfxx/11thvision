export default function Footer() {
  return (
    <footer style={{
      padding: '24px var(--padding-x)',
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '100px',
    }}>
      <p style={{
        fontSize: '0.75rem',
        color: 'var(--color-text-tertiary)',
      }}>
        &copy; {new Date().getFullYear()} 11th Vision
      </p>
      <p style={{
        fontSize: '0.75rem',
        color: 'var(--color-text-tertiary)',
      }}>
        V1 of many
      </p>
    </footer>
  )
}
