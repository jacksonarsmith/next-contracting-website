'use client'

import styles from './mission.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Mission() {
  const router = useRouter(); 

  return (
    <div className={styles.container}>
        <Image className={styles.image} src={'/landing-image.jpg'} alt={'Landing picture'} width={6048} height={4032} priority={true}/>
        <div className={styles.consultation}>
          <h1>Setup a Free Consultation Today!</h1>
        <p>Welcome to Imperial Contracting Ottawa, your one-stop solution for Complete Construction Services and Full Home Renovations. With a commitment to quality craftsmanship, we transform houses into dream homes. Take the first step with a free consultation, and let us bring your vision to life.</p>
            <Link className={styles.inquiry} href="#contact" onClick={() => router.push('contact')}>Contact</Link>
        </div>
        <div className={styles.overlay}>
            <h1>Building Dreams, Crafting Spaces: Your Vision, Our Expertise!</h1>
            <p>Find out what we can offer</p>
      </div>
    </div>
  )
}
