import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import './App.css';

import HomePage from './pages/homepage/';
import ShopPage from './pages/shop/';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/';
import Header from './components/header/';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unSubscribeFromAuth = null
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;