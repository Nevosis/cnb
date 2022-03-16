import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const components = {
  Header() {
    return (
      <div style={{ padding:20, textAlign:'center', justifyContent:'center' }}>
        C&B bitches
        <br/>
        (en vrai ça pourrait etre un img)
      </div>
    );
  },
}
function App() {

  return (
    <Authenticator components={components}>
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