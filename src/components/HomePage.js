import React, { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NaviBar from "./NaviBar";
import { AppContext } from '../contexts/AppContext';

const styles = {
  
};

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'count':
      return { ...state, count: action.payload };
    default:
      return initialState;
  }
};

const HomePage = props => {
  const { classes } = props;
  const [ appState, appDispatch ] = useContext(AppContext);
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const setAppCount = value => appDispatch({ type: 'count', payload: value });
  const setCount = value => dispatch({ type: 'count', payload: value });

  const handleButtonClick = () => {
    setAppCount(appState.count + 1);
    setCount(state.count + 1);
  }

  return (
    <>
      <header>
        <NaviBar />
      </header>
      <Paper>
        Welcome, AppCount:{appState.count}, Count: {state.count}<br/>
        {appState.hoge}<br/>
        <button onClick={handleButtonClick}>+1</button><br/>
        <br/>
        <Link to='/users/me'>my page</Link>
      </Paper>
    </>
  );
}

export default withStyles(styles)(HomePage);