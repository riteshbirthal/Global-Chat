import React from 'react';
import { App } from './App';
import './assets/styles/global.css';
import './assets/styles/animations.css';
import { createRoot } from 'react-dom/client';
import './index.css';


const container = document.getElementById('root');


const root = createRoot(container);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

