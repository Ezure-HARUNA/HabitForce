import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from '../firebase/config';

import { loggined, logouted } from '../actions/auth';
import history from './history';
import LandingPage from './LandingPage';
import Top from './Top/Top';
import NavBar from './NavBar';
import Auth from './Auth';
class App extends Component {
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // ログイン処理
        this.props.loggined();
        console.log('loginしました');
      } else {
        // ログアウト処理
        this.props.logouted();
      }
    });
  }
  render() {
    return (
      
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Auth>
            <Route path="/top" exact component={Top} />
          </Auth>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { isLoggedIn: state.auth.isLoggedIn };
};

export default connect(mapStateToProps, { loggined, logouted })(App);