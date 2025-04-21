import { useState } from 'react';
import { useChat } from '../../hooks/useChat';
import styles from './authmodal.module.css';

export const AuthModal = (props) => {
  const { dispatch } = useChat();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: ''
  });

  const validateFormData = () => {
    if(formData.name.trim().length===0) 
      return false;
    if(formData.age.trim().length===0 || formData.age<10)
      return false;
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'SET_USER', payload: formData });
    if(validateFormData()){
      props.setUserAuthenticated(true);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Join the Chat</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="number"
              placeholder="Age"
              min="13"
              required
              value={formData.age}
              onChange={e => setFormData({ ...formData, age: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <select
              value={formData.gender}
              onChange={e => setFormData({ ...formData, gender: e.target.value })}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className={styles.submitButton}>
            Enter Chat
          </button>
        </form>
      </div>
    </div>
  );
};