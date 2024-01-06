import Link from 'next/link';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSections}>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <Link href="https://www.instagram.com/yourusername/" className={styles.social_link}>
            <FontAwesomeIcon icon={faInstagram} size="3x" className={styles.icon} />
          </Link>
          <br />
          <Link href="https://www.facebook.com/yourusername/" className={styles.social_link}>
            <FontAwesomeIcon icon={faFacebook} size="3x" className={styles.icon} />
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {year} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;