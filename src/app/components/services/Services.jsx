import styles from './services.module.css'
import Image from 'next/image'

export default function Services() {
    const services = [
        { name: 'Kitchens', image: '/major.jpg' },
        { name: 'Bathrooms', image: '/bathroom.jpg' },
        { name: 'Additions', image: '/interior.jpg' },
        { name: 'Decking', image: '/decking.jpg' },
        { name: 'Lockstone', image: '/lockstone.jpg' },
        { name: 'Concrete', image: '/com.jpg' },
        // Add more services as needed
    ]
    
    return (
        <div className={styles.container} id='services'>
            <div className={styles.gridContent}> 
                <h1>Services</h1>
                <hr />
                <br />
                <div className={styles.services}>
                    <h2 className={styles.serviceTitle}>Full Home Renovations</h2>
                    <hr />
                    <p>Elevate Your Vision with Our Comprehensive Design-Build Services: Unleashing the Power of 3D Design, Expert Material Selection, and Precision Architectural Construction Planning. Below are a list of services for full home renovations we offer:</p>
                    <div className={styles.list}>
                        <div className={styles.interior}>
                            <h2>Interior</h2>
                            <ul>
                                <li>Kitchens</li>
                                <li>Bathrooms</li>
                                <li>Basements</li>
                            </ul>
                            <ul>
                                <li>Flooring</li>
                                <li>Windows</li>
                                <li>Additions</li>
                            </ul>
                        </div>
                        <div className={styles.exterior}>
                            <h2>Exterior</h2>
                            <ul>
                                <li>Excavation</li>
                                <li>Concrete</li>
                                <li>Lockstone</li>
                            </ul>
                            <ul>
                                <li>Paving</li>
                                <li>Landscaping</li>
                                <li>Roofing & Decking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <p>Take a look at some of our work below!</p>
            <div className={styles.content}>
                {services.map((service, index) => (
                    <div key={index} className={styles.service}>
                        <div className={styles.imageContainer}>
                            <Image src={service.image} alt={service.name} width={450} height={450} className={styles.image}/>
                            <h2 className={styles.serviceName}>{service.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
