import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Box} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        flexGrow: 1,
    },
    link: {
       textDecoration: "none",
    }
}));

interface HeaderProps {
    home?: boolean
}

export default function Header(props: HeaderProps) {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="lg">
                <Toolbar>
                    <Box className={classes.logo}>
                        <Link href="/">
                            <a className={classes.link}>
                                <Typography variant="h4" component="h1" >
                                    🍻 Bronks
                                </Typography>
                            </a>
                        </Link>
                    </Box>

                    <Box mr={2}><Link href="/login" passHref><Button variant="contained" color="secondary">Login</Button></Link></Box>
                    <Link href="/signup" passHref><Button color="inherit">Sign Up</Button></Link>

                </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}

