import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { isEmpty } from "lodash";

import firebase from './config/firebase';

import { UserContext } from './context';

import Landing from "./components/landing";
import Login from "./components/login";
import NotFound from "./components/error/NotFound";

import Navbar from "./components/base/navbar";

class App extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      console.log(user)
    });
  }

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ user: {} });
  }

  render() {
    const { user } = this.state
    return (
      <UserContext.Provider value={{ user }}>
        <Navbar logout={this.logout} />
        <Switch>
          { isEmpty(user) && <Route exact path="/login" component={Login} /> }
          <Route exact path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </UserContext.Provider>
    );
  }
}

export default withRouter(App);
