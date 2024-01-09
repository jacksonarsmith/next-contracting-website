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
      <label className={styles.statement}>
        Imperial Contracting Ottawa success is grounded on the belief and in strict adherence to
        the highest core values established in over 35 years of business
      </label>
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
              At Imperial Contracting Ottawa, integrity is the cornerstone of our business. We hold ourselves to the highest standards of honesty, transparency, 
              and ethical conduct in every interaction. Trust is earned, and we are committed to earning and maintaining your trust by consistently 
              delivering on our promises with integrity at the core of all our endeavors.
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
              Striving for excellence is not just a goal; it's our standard. At Imperial Contracting Ottawa, we are dedicated to delivering top-tier craftsmanship, unparalleled 
              quality, and meticulous attention to detail in every project we undertake. Our commitment to excellence ensures that your vision is not only met but 
              exceeded, setting us apart as a reliable partner in bringing your projects to fruition.
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
              With years of hands-on experience and a wealth of industry knowledge, Imperial Contracting Ottawa stands as a seasoned expert in the contracting field. Our team brings a depth of 
              understanding and skill to every project, ensuring smooth execution and delivering results that reflect our rich history of successful undertakings. Trust in our experience 
              to bring your visions to life with efficiency and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values