import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './home_page';
import 'bootstrap/dist/css/bootstrap.min.css';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import { BrowserRouter, Route } from "react-router-dom";
import Bike from "./records/bike";
import User from "./records/user";

Amplify.configure(config);

ReactDOM.render(
  <BrowserRouter>
    <div className="content">
      <Route path="/" exact component={() => <HomePage />} />
      <Route path="/bike" exact component={(props) => <Bike {...props} />} />
      <Route path="/user" exact component={(props) => <User {...props} />} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
