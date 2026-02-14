import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.title = 'Ibraheem Mohammedally — Product Designer'
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
      </main>
      <Footer />
    </>
  )
}

export default App
