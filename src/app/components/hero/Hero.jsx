import styles from '@/app/components/hero/hero.module.css'
import Image from 'next/image'

function Hero() {
  return (
    
    <div className={styles.container} id='about'>
      <Image src={"/tophead.jpg"} alt='Hero picture' width={902} height={668} className={styles.image}/>
      <div className={styles.block}>
        <h2>About us</h2>
        <p>
          Imperial Construction Corp, your destination for precision and excellence in construction. Whether it's a new build, 
          renovation, or remodeling project, we're committed to turning your vision into reality with skilled craftsmanship and 
          clear communication. Choose us for your project, and experience the difference of working with a construction company 
          dedicated to making your dream home a reality.
        </p>
      </div>
    </div>
  )
}

export default Hero