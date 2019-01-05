import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NaviBar from "./NaviBar";
import { AppContext } from '../App';

const styles = {
  
};

function HomePage(props) {
  const { classes } = props;
  const [ appState, setAppState ] = useContext(AppContext);

  function handleButtonClick() {
    setAppState(prev => ({
      ...prev,
      count: prev.count + 1,
      hoge: prev.hoge + (
        prev.count % 2 === 0
        ? 'foo'
        : 'bar'
      ),
    }));
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