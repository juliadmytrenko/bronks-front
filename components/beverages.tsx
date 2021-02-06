import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tile from "./tile";
import {beverage} from "../lib/myTypes";
// import Link from "next/link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: `${theme.spacing(3)}px auto`,
    },
}));


interface BeveragesProps {
    beverages: beverage[];
}

export default function Beverages({beverages} : BeveragesProps) {
    const classes = useStyles();

    // const handleOnClick = () => {
    //
    // }

    return (
        <Grid container className={classes.root} spacing={2}>
            {beverages.map((beverage, index) => (
                <Grid key={index} item xs={12} md={4} lg={3} >
                    <Tile tile={beverage}/>
                </Grid>
            ))}
        </Grid>
    );
}

