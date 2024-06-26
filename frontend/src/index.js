import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SplitsContextProvider } from './context/SplitContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SplitsContextProvider>
        <App />
      </SplitsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

