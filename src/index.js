import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';
// import { ReactQueryDevtools }from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';

import './index.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
          {/* <ReactQueryDevtools /> */}
      </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);