import React from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './landing.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';
import PetProfile from './pet-owner-profile.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={ Landing } />
        <Route path='/signup' component={ Signup } />
        <Route path='/login' component={ Login } />
        <Route path='/pet-profile' component={ PetProfile } />
      </div>
    )
  }
}

module.exports = App;


