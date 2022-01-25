import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './home_page';
import 'bootstrap/dist/css/bootstrap.min.css';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bike from "./records/bike";
import User from "./records/user";

Amplify.configure(config);

ReactDOM.render(
  <BrowserRouter>
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="bike" element={<Bike />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
