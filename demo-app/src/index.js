import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewApp from './newApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewApp />
  </React.StrictMode>
);
