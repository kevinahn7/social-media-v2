import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialMediaApp from './components/SocialMediaApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <SocialMediaApp />,
  document.getElementById('root')
);
registerServiceWorker();
