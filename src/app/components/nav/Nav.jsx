'use client'

import Link from 'next/link'
import styles from '@/app/components/nav/nav.module.css'
import { useRouter } from 'next/navigation'

function Nav() {

    const router = useRouter();

    return (
        <div>
            <div className={styles.container}>
                <ul className={styles.logo}>
                    <li className={styles.item}>
                        <Link href="#home" onClick={() => router.push('home')}>Home</Link>
                    </li>
                </ul>
                <ul className={styles.sections}>
                    <li className={styles.item}>
                        <Link href="#about" onClick={() => router.push('about')}>About Us</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#services" onClick={() => router.push('services')}>Services</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#contact" onClick={() => router.push('contact')}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav