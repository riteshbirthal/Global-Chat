import { useState } from 'react';
import { useChat } from '../../hooks/useChat';
import { v4 as uuidv4 } from 'uuid';
import styles from './topiccreator.module.css';

export const TopicCreator = () => {
  const [topicName, setTopicName] = useState('');
  const { dispatch } = useChat();

  const handleSubmit = e => {
    e.preventDefault();
    if (!topicName.trim()) return;
    
    const newTopic = {
      id: uuidv4(),
      name: `#${topicName.trim()}`,
      messages: []
    };
    
    dispatch({ type: 'ADD_TOPIC', payload: newTopic });
    setTopicName('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={topicName}
        onChange={e => setTopicName(e.target.value)}
        placeholder="New topic..."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        +
      </button>
    </form>
  );
};