import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/layout';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Layout} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
