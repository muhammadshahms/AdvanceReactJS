import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './ControlForms/Form';
import LoginForm from "./ControlForms/LoginForm";
import FeedbackForm from './ControlForms/FeedbackForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginForm/>
  </React.StrictMode>
);
reportWebVitals();
