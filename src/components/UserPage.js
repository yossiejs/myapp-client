import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NaviBar from "./NaviBar";

const styles = {

};

function UserPage(props) {
    const { classes } = props;
    return (
        <>
        <header>
            <NaviBar />
        </header>
        <Paper>
            Hello, Anonymous
        </Paper>
        </>
    );
}

export default withStyles(styles)(UserPage);