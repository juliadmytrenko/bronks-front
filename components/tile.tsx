import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid red",
        padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
        width: "100%",
        height: "100%",
        maxHeight: "40rem",
        borderRadius: "0.5rem",
        // backgroundColor: theme.palette.background.yellow,
        color: theme.palette.common.white,
        "&:hover": {
            cursor: "pointer",
        }
    },
    pinkBorder: {
        // border: `1px solid ${theme.palette.primary.hot}`,
        backgroundColor: theme.palette.common.black,
    },
    title: {
        // color: theme.palette.primary.hot,
    },
    img: {
        width: `auto`,
        height: "20rem",
        display: `block`,
        margin: `0 auto`,
    },
}));



export default function Tile({tile}) {
    const classes = useStyles();

    return (
        <Link href="#">
            <div className={classes.root}>
                <Box p={3} className={classes.pinkBorder}>
                    <img className={classes.img} src={tile.img} alt={tile.title} />
                    <Box mt={3}>
                        <Typography className={classes.title} variant="h6" component="h4">{tile.title}</Typography>
                        <Typography>{tile.author}</Typography>
                    </Box>
                </Box>
            </div>
        </Link>
    );
}


const tileDataMockup =  {
    img: "https://images.punkapi.com/v2/192.png",
    title: 'Punk IPA 2007 - 2010',
    author: 'Punk',
};
