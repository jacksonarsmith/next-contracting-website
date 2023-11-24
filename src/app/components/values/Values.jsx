'use client'

import styles from '@/app/components/values/values.module.css'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faScaleBalanced, faAward } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Values() {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.includes(index)) {
      // If card is already flipped, remove it from the array
      setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index));
    } else {
      // If card is not flipped, add it to the array
      setFlippedCards([...flippedCards, index]);
    }
  }

  return (
    <div className={styles.section} id='values'>
      <h2>Who We Are</h2>
      <p>
        Imperial Contracting Ottawa success is grounded on the belief and in strict adherence to
        the highest core values established in over 35 years of business
      </p>
      <div className={styles.container}>
        <div className={`${styles.flip_card} ${flippedCards.includes(0) ? styles.flipped : ''}`} onClick={() => handleCardClick(0)}>
          <div className={styles.flip_card_inner}>
            <div className={styles.flip_card_front}>
              <FontAwesomeIcon icon={faScaleBalanced} className={styles.icon_light}/>
              <div className={styles.line_light}></div>
              <h3>Integrity</h3>
            </div>
            <div className={styles.flip_card_back}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum dolor error alias pariatur nemo iure animi aliquid magnam corporis! Dolorum optio, quisquam eum odit at quos laudantium distinctio voluptatum.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.flip_card} ${flippedCards.includes(1) ? styles.flipped : ''}`} onClick={() => handleCardClick(1)}>
          <div className={styles.flip_card_inner}>
            <div className={styles.flip_card_front}>
              <FontAwesomeIcon icon={faAward} className={styles.icon_light}/>
              <div className={styles.line_light}></div>
              <h3>Excellence</h3>
            </div>
            <div className={styles.flip_card_back}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum dolor error alias pariatur nemo iure animi aliquid magnam corporis! Dolorum optio, quisquam eum odit at quos laudantium distinctio voluptatum.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.flip_card} ${flippedCards.includes(2) ? styles.flipped : ''}`} onClick={() => handleCardClick(2)}>
          <div className={styles.flip_card_inner}>
            <div className={styles.flip_card_front}>
              <FontAwesomeIcon icon={faClipboardCheck} className={styles.icon_light}/>
              <div className={styles.line_light}></div>
              <h3>Experience</h3>
            </div>
            <div className={styles.flip_card_back}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum dolor error alias pariatur nemo iure animi aliquid magnam corporis! Dolorum optio, quisquam eum odit at quos laudantium distinctio voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values