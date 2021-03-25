import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, LoginCallback, AuthService } from '@okta/okta-react';
import Home from './Home';

const ENABLE_BUG = true;

var authService;
const config = {
  issuer: 'https://okta.com/auth/default',
  redirectUri: 'http://localhost:3000/implicit/callback',
  clientId: 'foo',
  isAuthenticated: ENABLE_BUG ? async () => {
    const accessToken = await authService.getAccessToken();
    const idToken = await authService.getIdToken();
    return accessToken && idToken ? true : false;
  } : null,
};
authService = new AuthService(config);

const App = () => { 
  return (
    <Router>
      <Security authService={authService}>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/implicit/callback' component={LoginCallback}/>
      </Security>
    </Router>
  );
};

export default App;
