import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/nav/Nav'
import Mission from './components/mission/Mission'
import Hero from './components/hero/Hero'
import Values from './components/values/Values'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


export default function Home() {
  return (
    <div>
      <Nav />
      <Mission />
      <Hero />
      <Values />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
