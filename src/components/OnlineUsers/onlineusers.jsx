import { useChat } from '../../hooks/useChat';
import styles from './onlineusers.module.css';

export const OnlineUsers = () => {
  const { state } = useChat();
  
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Online Users</h3>
      <ul className={styles.list}>
        {state.onlineUsers.map(user => (
          <li key={user} className={styles.user}>
            <div className={styles.status} />
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};