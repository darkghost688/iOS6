import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IPhone from './iPhone';
import Screen from './screen';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IPhone>
      <Screen />
    </ IPhone>
  </React.StrictMode>
);

reportWebVitals();
