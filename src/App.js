import React, { createContext, useState } from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import UserPage from './components/UserPage';
import HomePage from './components/HomePage';

export const AppContext = createContext();

const styles = {
  root: {
    flexGrow: 1,
  },
}

function App (props) {
  const { classes } = props;
  const initialState = {
    user: {
      displayName: 'anonymous'
    },
    count: 0,
    hoge: 'hoge',
  };
  const [ state, setState ] = useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      <div className={classes.root}>
        <Route path="/users/me" component={UserPage}></Route>
        <Route path="/" exact={true} component={HomePage}></Route>
      </div>
    </AppContext.Provider>
  );
}

export default withStyles(styles)(App);
