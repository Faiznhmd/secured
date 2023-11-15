import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import Recovery from './routes/Recovery.jsx';
import Cloud from './routes/Cloud.jsx';
import Contact from './routes/contact.jsx';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/cloud" element={<Cloud />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
