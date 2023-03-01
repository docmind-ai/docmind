import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { AppContent } from '../app-content/AppContent';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { toggleMenuPanel } from '../../store';

export function Main() {
    const dispatch = useDispatch();
    const toggleMenu: any = () => dispatch(toggleMenuPanel());

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DocMind
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <AppContent />
        </>
    );
}