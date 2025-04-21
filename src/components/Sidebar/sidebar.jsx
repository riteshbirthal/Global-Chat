import { useChat } from '../../hooks/useChat';
import { TopicCreator } from '../TopicCreator/topiccreator';
import { OnlineUsers } from '../OnlineUsers/onlineusers';
import styles from './sidebar.module.css';

export const Sidebar = () => {
  const { state, dispatch } = useChat();

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>Channels</h2>
        <TopicCreator />
      </div>
      
      <nav className={styles.nav}>
        {state.topics.map(topic => (
          <button
            key={topic.id}
            className={`${styles.topic} ${state.selectedTopic === topic.id ? styles.active : ''}`}
            onClick={() => dispatch({ type: 'SELECT_TOPIC', payload: topic.id })}
          >
            {topic.name}
          </button>
        ))}
      </nav>
      
      <OnlineUsers />
    </div>
  );
};