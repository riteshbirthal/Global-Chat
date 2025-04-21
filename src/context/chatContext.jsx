import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  user: JSON.parse(localStorage.getItem('chatUser')) || null,
  topics: JSON.parse(localStorage.getItem('chatTopics')) || [
    { id: 'general', name: '#general', messages: [] }
  ],
  selectedTopic: localStorage.getItem('selectedTopic') || 'general',
  typingUsers: [],
  onlineUsers: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_TOPIC':
      return { ...state, topics: [...state.topics, action.payload] };
    case 'SELECT_TOPIC':
      return { ...state, selectedTopic: action.payload };
    case 'ADD_MESSAGE':
      return {
        ...state,
        topics: state.topics.map(topic =>
          topic.id === state.selectedTopic
            ? { ...topic, messages: [...topic.messages, action.payload] }
            : topic
        )
      };
    case 'SET_TYPING':
      return {
        ...state,
        typingUsers: action.payload
      };
    case 'SET_ONLINE':
      return {
        ...state,
        onlineUsers: action.payload
      };
    default:
      return state;
  }
};

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('chatUser', JSON.stringify(state.user));
    localStorage.setItem('chatTopics', JSON.stringify(state.topics));
    localStorage.setItem('selectedTopic', state.selectedTopic);
  }, [state.user, state.topics, state.selectedTopic]);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};