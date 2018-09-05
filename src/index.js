import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SiderDemo from './navitor/navitor'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
registerServiceWorker();
