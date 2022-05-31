import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import profile from "../assets/perfil.jpg"
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function ButtonAppBar() {

    const [open, setOpen] = React.useState(false)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#293B5F" }}>
                <Toolbar>
                    <Avatar alt="Agustin Gomez Urrutia" src={profile} sx={{ width: 50, height: 50, marginRight: "auto" }} />
                    <IconButton sx={{ display: { xs: "block", sm: "none", md: "none", lg: "none", xl: "none" }, color: "white" }}>
                        <MenuIcon onClick={() => setOpen(true)} />
                    </IconButton>
                    <Box sx={{ display: { xs: "none", sm: "block", md: "block", lg: "block", xl: "block" } }}>
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
                    </Box>
                </Toolbar>
                <SwipeableDrawer anchor='right' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
                    <div>
                        <IconButton>
                            <ChevronRightIcon onClick={() => setOpen(false)} />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem>
                            <Link className='navLinksDrawer' sx={{ color: "black" }} to="/" onClick={() => setOpen(false)}>
                                ABOUT
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link className='navLinksDrawer' to="portfolio" onClick={() => setOpen(false)}>
                                PORTFOLIO
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link className='navLinksDrawer' to="resume" onClick={() => setOpen(false)}>
                                RESUME
                            </Link>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </AppBar>
        </Box >
    );
}
