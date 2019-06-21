import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const MainNav = () => {
    return (<AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Home
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default MainNav;