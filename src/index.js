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
import logo from "./images/logo.png";

Amplify.configure(config);
const LOGO_SIZE = 192;

ReactDOM.render(
  <BrowserRouter>
    <div className="content">
      <div className="centered">
        <a href="/">
          <img src={logo}
               alt="Bike Rental"
               width={LOGO_SIZE}
               height={LOGO_SIZE} />
        </a>
      </div>
      <Route path="/" exact component={() => <HomePage />} />
      <Route path="/bike" exact component={(props) => <Bike {...props} />} />
      <Route path="/user" exact component={(props) => <User {...props} />} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
