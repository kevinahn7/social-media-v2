import React, { Component } from 'react';
import '../styles/SocialMediaApp.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';

class SocialMediaApp extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default SocialMediaApp;
