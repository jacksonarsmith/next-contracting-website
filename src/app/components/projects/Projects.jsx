'use client'

import Image from 'next/image';
import styles from '@/app/components/projects/projects.module.css';
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Projects() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageGallery = {
    'Major Remodelling': ['/major.jpg', '/bathroom.jpg', '/major.jpg'],
    'Bathroom & Kitchens': ['/bathroom.jpg', '/bathroom.jpg', '/bathroom.jpg'],
    'Interior Remodelling': ['/interior.jpg', '/interior.jpg', '/interior.jpg'],
    'Exterior Remodelling': ['/ext.jpg', '/ext.jpg', '/ext.jpg'],
    'Commercial Services': ['/com.jpg', '/com.jpg', '/com.jpg'],
    'Outdoor Remodelling': ['/outdoor.jpg', '/outdoor.jpg', '/outdoor.jpg'],
  };

  const maxItems = 2; // Number of items to show at a time

  const visibleImages = imageGallery[Object.keys(imageGallery)[selectedItem]].slice(currentIndex, currentIndex + maxItems);

  const shiftLeft = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const shiftRight = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, imageGallery[Object.keys(imageGallery)[selectedItem]].length - maxItems));
  };

  const handleItemClick = (index) => {
    setCurrentIndex(0);
    setSelectedItem(index);
  };

  return (
    <div className={styles.container} id='projects'>
      <h2>Project Gallery</h2>
      <div className={styles.choices}>
        <ul className={styles.services}>
          {['Major Remodelling', 'Bathroom & Kitchens', 'Interior Remodelling', 'Exterior Remodelling', 'Commercial Services', 'Outdoor Remodelling'].map((item, index) => (
            <li
              key={index}
              className={styles.item}
              style={{
                color: selectedItem === index ? 'var(--primary-button-color)' : 'var(--secondary-background-color)',
              }}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.carousel}>
        <button className={styles.button} onClick={shiftLeft} disabled={currentIndex === 0}>
          <FontAwesomeIcon className={styles.icon} icon={ faChevronLeft } onClick={shiftRight} disabled={currentIndex + maxItems === imageGallery[Object.keys(imageGallery)[selectedItem]].length}/>
        </button>
        {visibleImages.map((image, index) => (
          <Image className={styles.image} key={index} src={image} alt={`Project Image ${index + currentIndex + 1}`} width={480} height={460} priority={false} />
        ))}
        <button className={styles.button} onClick={shiftRight} disabled={currentIndex + maxItems === imageGallery[Object.keys(imageGallery)[selectedItem]].length}>
          <FontAwesomeIcon className={styles.icon} icon={ faChevronRight } onClick={shiftRight} disabled={currentIndex + maxItems === imageGallery[Object.keys(imageGallery)[selectedItem]].length}/>
        </button>
      </div>
    </div>
  );
}

export default Projects;