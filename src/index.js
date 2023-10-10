import { React, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/index.less'
import "normalize.css"
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Suspense fallback="loading">
      <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
      </Provider>
    </Suspense>

);
