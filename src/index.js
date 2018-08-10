import React from 'react';
import ReactDOM from 'react-dom';
import Index from './containers/index';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
