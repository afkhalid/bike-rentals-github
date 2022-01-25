import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserLogIn from './user_login';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <UserLogIn />
  </React.StrictMode>,
  document.getElementById('root')
);
