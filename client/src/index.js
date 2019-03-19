import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './static/styles/main.scss';
import App from './app';

const history = location.h;

ReactDOM.render(
<Router>
  <App />
</Router>,
  document.getElementById('root')
);