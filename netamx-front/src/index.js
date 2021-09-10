import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import client from './config/apollo';

import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';

import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import LoginLayout from 'layouts/Login.js';

ReactDOM.render(
  <ApolloProvider client={client()}>
    <ApolloHooksProvider client={client()}>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Route path="/access" render={(props) => <LoginLayout {...props} />} />
          <Redirect from="/" to="/access/login" />
        </Switch>
      </BrowserRouter>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
