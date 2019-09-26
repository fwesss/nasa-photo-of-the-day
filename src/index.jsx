import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { config } from 'dotenv';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';


config();

ReactDOM.render(
  <App />, document.getElementById('root'),
);
