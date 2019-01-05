import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Home from './containers/Home';
import User from './containers/User';

const styles = {
  root: {
    flexGrow: 1,
  },
}

function App (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Route path="/users/me" component={User}></Route>
      <Route path="/" exact={true} component={Home}></Route>
    </div>
  );
}

export default withStyles(styles)(App);
