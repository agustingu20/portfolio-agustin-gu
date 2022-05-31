import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#293B5F" }}>
                <Toolbar>
                    <Link className='navLinks' to="/">
                        <Button sx={{ color: "white" }} size="small" >
                            <p className='boton'>
                                About
                            </p>
                        </Button>
                    </Link>
                    <Link className='navLinks' to="portfolio">
                        <Button sx={{ color: "white" }} size="small">
                            <p className='boton'>
                                Portfolio
                            </p>
                        </Button>
                    </Link>
                    <Link className='navLinks' to="resume">
                        <Button sx={{ color: "white" }} size="small">
                            <p className='boton'>
                                Resume
                            </p>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box >
    );
}
