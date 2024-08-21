import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications';

//cannot redeclare block-scope variable root
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const root-notifications = ReactDOM.createRoot(document.getElementById('root-notifications'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

