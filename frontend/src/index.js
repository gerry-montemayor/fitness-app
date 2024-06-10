import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SplitsContextProvider } from './context/SplitContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SplitsContextProvider>
      <App />
    </SplitsContextProvider>
  </React.StrictMode>
);

