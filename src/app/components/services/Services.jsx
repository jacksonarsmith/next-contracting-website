import styles from './services.module.css'
import Image from 'next/image'

export default function Services() {
  return (
    <div className={styles.container} id='services'>
        <Image className={styles.image} src={'/services.jpg'} alt={'Landing picture'} width={4000} height={3000} priority={true}/>
        <div className={styles.overlay}>
            <div className={styles.heading}>
                <h1>Complete Construction Services</h1>
                <h2>Full Home Renovations</h2>
            </div>
            <ul className={styles.services}>
                <li className={styles.service}>
                    <h3>Interior</h3>
                    <ul className={styles.service_types}>
                        <li>Kitchens</li>
                        <li>Bathrooms</li>
                        <li>Basements</li>
                        <li>Flooring</li>
                        <li>Windows</li>
                        <li>Additions</li>
                    </ul>
                </li>
                <li className={styles.service}>
                    <h3>Exterior</h3>
                    <ul className={styles.service_types}>
                    <li>Excavation</li>
                        <li>Concrete</li>
                        <li>Lockstone</li>
                        <li>Paving</li>
                        <li>Landscaping</li>
                        <li>Roofing</li>
                        <li>Decking</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  )
}
