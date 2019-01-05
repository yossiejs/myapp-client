import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NaviBar from "./NaviBar";
import { AppContext } from '../contexts/AppContext';

const styles = {
  
};

const HomePage = props => {
  const { classes } = props;
  const [ appState, appDispatch ] = useContext(AppContext);

  const setCount = value => appDispatch({ type: 'count', payload: value });

  const handleButtonClick = () => {
    setCount(appState.count + 1);
  }

  return (
    <>
      <header>
        <NaviBar />
      </header>
      <Paper>
        Welcome, {appState.count}<br/>
        {appState.hoge}<br/>
        <button onClick={handleButtonClick}>+1</button><br/>
        <br/>
        <Link to='/users/me'>my page</Link>
      </Paper>
    </>
  );
}

export default withStyles(styles)(HomePage);