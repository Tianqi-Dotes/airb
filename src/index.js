import { React, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/index.less'
import "normalize.css"
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Suspense fallback="loading">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>

);
