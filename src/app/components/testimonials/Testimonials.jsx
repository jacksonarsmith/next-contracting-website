import styles from '@/app/components/testimonials/testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.container}>
      <h2>Testimonials</h2>
      <ul className={styles.testimonials}>
        <li className={styles.testimonial}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eum dolore iusto veniam voluptatum, nisi repellendus asperiores numquam commodi, non ipsa et dignissimos at repellat. Velit modi cumque maiores? Eius.</p>
        </li>
        <li className={styles.testimonial}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae recusandae ratione ipsam ipsa non, deleniti dolor ex, placeat totam eum animi, rerum pariatur tempora inventore magni ullam est suscipit?</p>
        </li>
        <li className={styles.testimonial}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illo beatae commodi itaque! Nostrum vero praesentium corporis exercitationem nobis eum cupiditate hic, necessitatibus quod tenetur nesciunt, porro dolor dignissimos aliquid!</p>
        </li>
      </ul>
    </div>
  )
}

export default Testimonials