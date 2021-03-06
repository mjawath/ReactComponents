import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './Store';
import { Provider } from 'react-redux';
import {test} from './Test';


ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>,
    document.getElementById('root'));
registerServiceWorker();

export default test;