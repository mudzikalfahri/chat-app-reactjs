import React from 'react';
import './header.styles.scss';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar className='header'>
                <Button color="inherit">
                <MenuRoundedIcon />
                </Button>
                <Typography variant="h6" className='title'>
                Message App
                </Typography>
                <Button color="inherit"><AccountBoxRoundedIcon/></Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
