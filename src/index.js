import React, { createContext }from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

export const RootContext = createContext([0, (count) => { return count; }]);

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
, document.getElementById('root'));

serviceWorker.unregister();

