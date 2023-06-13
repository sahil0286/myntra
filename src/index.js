import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0Provider
    domain="your-domain"
    clientId="your-clientId"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
  </Auth0Provider>
    </BrowserRouter>
  
);