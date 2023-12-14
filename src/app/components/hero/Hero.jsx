import styles from '@/app/components/hero/hero.module.css'
import Image from 'next/image'

function Hero() {
  return (
    
    <div className={styles.container} id='about'>
      <Image src={"/tophead.jpg"} alt='Hero picture' width={1350} height={780} className={styles.image}/>
      <div className={styles.block}>
        <h2>About us</h2>
        <div className={styles.line}></div>
        <p>
          We provide construction management, general contracting and design-build services on projects small 
          and large for a diverse group of customers. We constantly achieve success with our clients through
          innovation, collaboration and best practices.
        </p>
      </div>
    </div>
  )
}

export default Hero