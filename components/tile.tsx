import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Link from "next/link";


const shortenText = (text: string) => {

    let sliced = text;
    if (sliced.length > 150) {
        sliced = text.slice(0, 150);
        sliced += " ...";
    }

    return sliced;
}

const useStyles = makeStyles((theme) => ({
    root: {
        border: `2px outset ${theme.palette.secondary.main}`,
        padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
        width: "100%",
        height: "100%",
        maxHeight: "40rem",
        borderRadius: "1rem",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        textDecoration: "none",
        display: "block",
        zIndex: 2,
        "&:hover": {
            cursor: "pointer",
        },
        "&:active": {
            border: `2px inset ${theme.palette.secondary.main}`,
        }
    },
    pinkBorder: {
        height: "100%",
        border: `1px solid ${theme.palette.secondary.main}`,
        // backgroundColor: theme.palette.primary.light,
        backgroundColor: theme.palette.primary.light,
    },
    name: {
        // color: myTheme.palette.primary.hot,
    },
    img: {
        width: `auto`,
        height: "20rem",
        display: `block`,
        margin: `0 auto`,
    },
}));


export default function Tile({tile}) {
    // const [state, setState] = React.useState("initState");
    const classes = useStyles();

    return (
        <Link href={`/beverages/${encodeURIComponent(tile.slug)}`}>
            <a className={classes.root}>
                <Box p={3} className={classes.pinkBorder}>
                    <img className={classes.img} src={tile.img} alt={tile.title}/>
                    <Box mt={3}>
                        <Typography className={classes.name} variant="h6" component="h4">{tile.name}</Typography>
                        <Typography>{shortenText(tile.description)}</Typography>
                    </Box>
                </Box>
            </a>
        </Link>
    );
}

// <Link >
//     <a className={classes.link}><Tile tile={beverage}/></a>
// </Link>
