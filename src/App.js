import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';
import Home from './Home';

const config = {
  issuer: 'https://okta.com/auth/default',
  redirectUri: 'http://localhost:3000/implicit/callback',
  clientId: 'foo',
};

const App = () => { 
  return (
    <Router>
      <Security {...config}>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/implicit/callback' component={LoginCallback}/>
      </Security>
    </Router>
  );
};

export default App;
