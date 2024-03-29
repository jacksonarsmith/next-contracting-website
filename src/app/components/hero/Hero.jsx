import styles from '@/app/components/hero/hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    
    <div className={styles.container} id='about'>
      <Image src={"/tophead.jpg"} alt='Hero picture' width={1350} height={780} className={styles.image}/>
      <div className={styles.block}>
        <h2>About us</h2>
        <hr />
        <p>
          Imperial Contracting Ottawa, your one-stop solution for Complete Construction Services and Full Home Renovations. 
          With a commitment to quality craftsmanship, we transform houses into dream homes. Take the first step with a free 
          consultation, and let us bring your vision to life.
        </p>
        <p>
          We provide construction management, general contracting and 
          design-build services on projects small and large for a diverse group of customers. We constantly achieve success 
          with our clients through innovation, collaboration and best practices.
        </p>
        <button>
          <Link href="#contact">Contact us</Link>
        </button>
      </div>
    </div>
  )
}

export default Hero