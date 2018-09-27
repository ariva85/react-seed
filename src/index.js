import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from 'store/store';

const rootElem = document.getElementById('root');
const app = (
	<Provider store={store}>
		<App />
	</Provider>
);
ReactDOM.render(app, rootElem);
registerServiceWorker();
