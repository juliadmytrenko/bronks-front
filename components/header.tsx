import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
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

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                        some icon
                    </IconButton>
                    <Typography variant="h6" component="h1" className={classes.title}>
                        Bronks
                    </Typography>
                    <Button color="inherit">Login</Button>

                </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}
