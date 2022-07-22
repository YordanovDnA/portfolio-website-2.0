import React from 'react';
import { render } from 'react-snapshot'
import App from './App';
import "./css/main.scss"
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/popper";
import { BrowserRouter } from 'react-router-dom';


render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
