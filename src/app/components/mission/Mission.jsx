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
        <div className={styles.overlay}>
            <h1>Building Dreams, Crafting Spaces: Your Vision, Our Expertise!</h1>
            <p>Find out what we can offer</p>
            <button>
                <Link href="#services" onClick={() => router.push('services')}>Learn more</Link>
            </button>
      </div>
    </div>
  )
}
