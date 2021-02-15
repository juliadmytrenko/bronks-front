import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tile from "./tile";
import {product} from "../lib/myTypes";
// import Link from "next/link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: `${theme.spacing(3)}px auto`,
    },
}));


interface TilesWithProductsProps {
    products: product[];
}

export default function TilesWithProducts({products} : TilesWithProductsProps) {
    const classes = useStyles();

    // const handleOnClick = () => {
    //
    // }

    return (
        <Grid container className={classes.root} spacing={2}>
            {products.map((product, index) => (
                <Grid key={index} item xs={12} md={4} lg={3} >
                    <Tile tile={product}/>
                </Grid>
            ))}
        </Grid>
    );
}

