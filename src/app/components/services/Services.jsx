import styles from '@/app/components/services/services.module.css'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faBathtub, faKitchenSet, faHammer, faTrowelBricks, faBuilding, faTree } from '@fortawesome/free-solid-svg-icons'

function Services() {
  return (
    <div className={styles.section} id='services'>
      <h2>Services</h2>
      <div className={styles.container}>
        <div className={styles.card_light}>
            <FontAwesomeIcon icon={faHouseChimney} className={styles.icon_dark}/>
            <div className={styles.line_dark}></div>
            <h3>Major Remodelling</h3>
        </div>
        <div className={styles.card_dark}>
            <FontAwesomeIcon icon={faBathtub} className={styles.icon_light}/>
            <div className={styles.line_light}/>
            <h3>Bathroom & Kitchens</h3>
        </div>
        <div className={styles.card_light}>
            <FontAwesomeIcon icon={faHammer} className={styles.icon_dark}/>
            <div className={styles.line_dark}></div>
            <h3>Interior remodelling</h3>
        </div>
        <div className={styles.card_dark}>
            <FontAwesomeIcon icon={faTrowelBricks} className={styles.icon_light}/>
            <div className={styles.line_light}></div>
            <h3>Exterior remodeling</h3>
        </div>
        <div className={styles.card_light}>
            <FontAwesomeIcon icon={faBuilding} className={styles.icon_dark}/>
            <div className={styles.line_dark}></div>
            <h3>Commercial Services</h3>
        </div>
        <div className={styles.card_dark}>
            <FontAwesomeIcon icon={faTree} className={styles.icon_light}/>
            <div className={styles.line_light}></div>
            <h3>Outdoor remodelling</h3>
        </div>
      </div>
      <button>Learn More</button>
    </div>
  )
}

export default Services