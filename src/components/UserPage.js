import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NaviBar from "./NaviBar";
import { AppContext } from '../App';

const styles = {

};

function UserPage(props) {
  const { classes } = props;
  const [ appState ] = useContext(AppContext);

  return (
    <>
      <header>
        <NaviBar />
      </header>
      <Paper>
        Hello, {appState.user.displayName}<br/>
        <br/>
        <Link to='/'>home</Link>
      </Paper>
    </>
  );
}

export default withStyles(styles)(UserPage);