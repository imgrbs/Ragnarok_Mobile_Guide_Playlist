import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";

import Landing from "./components/landing";
import Login from "./components/login";
import NotFound from "./components/error/NotFound";

import Header from "./components/base/header";
import Navbar from "./components/base/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>Ragnarok M Eternal Love : Video Guideline</Header>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
