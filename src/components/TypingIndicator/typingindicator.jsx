import { useChat } from '../../hooks/useChat';
import styles from './typingindicator.module.css';

export const TypingIndicator = () => {
  const { state } = useChat();
  const typingUsers = state.typingUsers;

  if (!typingUsers.length) return null;

  const visibleUsers = typingUsers.slice(0, 2);
  const moreCount = typingUsers.length - 2;

  return (
    <div className={styles.container}>
      <div className={styles.dotAnimation}>
        {visibleUsers.map(user => (
          <span key={user} className={styles.user}>
            {user}
          </span>
        ))}
        {moreCount > 0 && <span className={styles.more}>+{moreCount} others</span>}
        <span className={styles.dots}>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
        </span>
      </div>
    </div>
  );
};