import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NaviBar from "./NaviBar";
import { RootContext } from '..';

const styles = {

};

function HomePage(props) {
    const { classes } = props;
    const [ count, setCount ] = useContext(RootContext);
    
    return (
        <>
            <header>
                <NaviBar />
            </header>
            <Paper>
                Welcome, {count}<br/>
                <button onClick={() => { console.log(count); setCount(count + 1)}}>+1</button>
            </Paper>
        </>
    );
}

export default withStyles(styles)(HomePage);