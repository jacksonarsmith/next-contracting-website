import Link from 'next/link'
import styles from '@/app/page.module.css'

function Nav() {
  return (
    <div>
        <div className={styles.container}>
            <ul className={styles.logo}>
                <li className={styles.item}>
                    <Link href="/#" scroll={true}>Home</Link>
                </li>
            </ul>
            <ul className={styles.sections}>
                <li className={styles.item}>
                    <Link href="/about" scroll={true}>About Us</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/services">Services</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/testimonials">Testimonials</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav