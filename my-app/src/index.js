import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Auth0Provider
        domain="dev-4usv1gkwr2zaot2o.us.auth0.com"
        clientId="LtmFE02by8VAET15sPTnjkNY2X5ni4mu"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>

  </React.StrictMode>
);



