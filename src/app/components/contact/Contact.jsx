'use client';

import styles from './contact.module.css'; 
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../../../utils/send-mail';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <div>
      <h2 className={styles.heading}>Contact Us</h2>
      <div className={styles.line}></div>
      <p className={styles.subheading}>
        We offer full home renovations to our clients. Whether you &apos; re looking to remodel your kitchen, bathroom, or any other part of your home, our experienced team is here to help. Contact us today to discuss your project and get a free consultation.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} id='contact'>
        <div style={{ marginTop: '2rem' }}>
          <label htmlFor='name'>Full Name:</label>
          <input
              type='text'
              placeholder='Full Name'
              {...register('name', { required: true })}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor='email'>Email Address:</label>
          <input
              type='email'
              placeholder='johndoe@gmail.com'
              {...register('email', { required: true })}
          />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
              rows={4}
              placeholder='Type your message'
              {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;