import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import CrosshairCursor from './components/CrosshairCursor'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <CrosshairCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}
