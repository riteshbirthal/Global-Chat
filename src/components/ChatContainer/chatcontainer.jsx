import { useState, useEffect, useRef } from 'react';
import { useChat } from '../../hooks/useChat';
import { Message } from '../Message/message';
import { TypingIndicator } from '../TypingIndicator/typingindicator';
import styles from './chatcontainer.module.css';
import { v4 as uuidv4 } from 'uuid';

export const ChatContainer = () => {
  const { state, dispatch } = useChat();
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const typingTimeout = useRef();

  const selectedTopic = state.topics.find(t => t.id === state.selectedTopic);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = e => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: uuidv4(),
      text: message,
      sender: state.user.name,
      timestamp: new Date().toISOString()
    };

    dispatch({ type: 'ADD_MESSAGE', payload: newMessage });
    setMessage('');
    setIsTyping(false);
  };

  const handleTyping = () => {
    if (!isTyping) {
      setIsTyping(true);
      dispatch({
        type: 'SET_TYPING',
        payload: [...state.typingUsers, state.user.name]
      });
    }

    clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => {
      setIsTyping(false);
      dispatch({
        type: 'SET_TYPING',
        payload: state.typingUsers.filter(u => u !== state.user.name)
      });
    }, 3000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedTopic.messages]);

  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        {selectedTopic.messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <TypingIndicator />
      
      <form onSubmit={handleSendMessage} className={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={e => {
            setMessage(e.target.value);
            handleTyping();
          }}
          placeholder="Type a message..."
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};