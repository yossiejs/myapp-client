import React, { createContext, useState } from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import UserPage from './components/UserPage';
import HomePage from './components/HomePage';
import { AppContextProvider } from './contexts/AppContext';

const styles = {
  root: {
    flexGrow: 1,
  },
}

const App = props => {
  const { classes } = props;
  return (
    <AppContextProvider>
      <div className={classes.root}>
        <Route path="/users/me" component={UserPage}></Route>
        <Route path="/" exact={true} component={HomePage}></Route>
      </div>
    </AppContextProvider>
  );
}

export default withStyles(styles)(App);
