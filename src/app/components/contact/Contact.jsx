import styles from '@/app/components/contact/contact.module.css'
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formState);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} />
        </label>
        <label>
          Message:
          <textarea name="message" onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;