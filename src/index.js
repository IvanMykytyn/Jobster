import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import 'normalize.css';
import './assets/css/index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
