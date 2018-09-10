import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import SocialMediaApp from './components/SocialMediaApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <SocialMediaApp />
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
