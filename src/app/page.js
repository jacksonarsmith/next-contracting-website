import styles from './page.module.css'
import Nav from './components/nav/Nav'
import Mission from './components/mission/Mission'
import Hero from './components/hero/Hero'
import Values from './components/values/Values'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav />
      <Mission />
      <Values />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
