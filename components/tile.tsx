import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import BorderUI from "./UI/border";


const shortenText = (text: string) => {

    let sliced = text;
    if (sliced && sliced.length > 150) {
        sliced = text.slice(0, 150);
        sliced += " ...";
    }

    return sliced;
}

const useStyles = makeStyles((theme) => ({
    img: {
        width: `auto`,
        maxWidth: `100%`,
        height: "20rem",
        display: `block`,
        margin: `0 auto`,
    },
}));


export default function Tile({tile}) {
    const classes = useStyles();

    return (
       <BorderUI href={`/beer/${encodeURIComponent(tile.product.slug)}`}>
            <img className={classes.img} src={tile.product.image} alt={tile.product.name}/>
            <Box mt={3}>
                <Typography variant="h6" component="h4">{tile.product.name}</Typography>
                <Typography>{shortenText(tile.product.description)}</Typography>
            </Box>
       </BorderUI>
    );
};
