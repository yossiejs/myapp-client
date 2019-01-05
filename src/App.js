import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import UserPage from './components/UserPage';
import HomePage from './components/HomePage';

const styles = {
  root: {
    flexGrow: 1,
  },
}

function App (props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Route path="/users/me" component={UserPage}></Route>
      <Route path="/" exact={true} component={HomePage}></Route>
    </div>
  );
}

export default withStyles(styles)(App);
