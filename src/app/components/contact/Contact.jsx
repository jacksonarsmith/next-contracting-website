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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} id='contact'>
      <div>
        <label htmlFor='name'>Full Name:</label>
        <input
          type='text'
          placeholder='Full Name'
          {...register('name', { required: true })}
        />
      </div>
      <div>
        <label htmlFor='email'>Email Address:</label>
        <input
          type='email'
          placeholder='example@domain.com'
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
  );
};

export default Contact;