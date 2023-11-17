import styles from '@/app/components/contact/contact.module.css'

function Contact() {
  return (
    <div className={styles.container} id='contact'>
      <h2>Contact Us</h2>
      <div className={styles.form}>
        <input type='text' placeholder='Enter Name'/>
        <input type='email' placeholder='Enter Email'/>
        <input type='text' placeholder='Enter Phone Number'/>
        <input type='text' placeholder='Service'/>
      </div>
      <input type="text" placeholder='Message' className={styles.message}/>
      <button type='submit'>Submit</button>
    </div>
  )
}

export default Contact