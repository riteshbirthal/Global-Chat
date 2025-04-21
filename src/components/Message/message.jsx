import styles from './message.module.css';

export const Message = ({ message }) => {
  return (
    <div className={styles.message}>
      <div className={styles.header}>
        <span className={styles.sender}>{message.sender}</span>
        <span className={styles.timestamp}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
      <div className={styles.content}>{message.text}</div>
    </div>
  );
};