import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { Component } from 'react';

class UserLogIn extends Component {
  render() {
    const { signOut, user } = this.props;
    return (
      <div>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  }
}

export default withAuthenticator(UserLogIn);
