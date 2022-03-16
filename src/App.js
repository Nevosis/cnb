import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My Cynism and Hapiness app on AWS</h1>
          <div>We now have Auth!</div>
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );


}

export default App;