import { ChatProvider } from './context/chatContext';
import { AuthModal } from './components/AuthModal/authmodal';
import { Sidebar } from './components/Sidebar/sidebar';
import { ChatContainer } from './components/ChatContainer/chatcontainer';
import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  return (
    <ChatProvider>
      <div className={styles.app}>
        {!userAuthenticated ? (<AuthModal setUserAuthenticated={setUserAuthenticated} />) :
        (<div className={styles.main}>
          <div className={styles.AppSidebar}>
            <Sidebar />
          </div>
          <div className={styles.AppChatContainer}>
            <ChatContainer />
          </div>
        </div>)}
      </div>
    </ChatProvider>
  );
};