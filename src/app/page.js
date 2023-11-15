import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
