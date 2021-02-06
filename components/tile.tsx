import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import BorderUI from "./UI/border";


const shortenText = (text: string) => {

    let sliced = text;
    if (sliced.length > 150) {
        sliced = text.slice(0, 150);
        sliced += " ...";
    }

    return sliced;
}

const useStyles = makeStyles((theme) => ({
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
       <BorderUI href={`/beverages/${encodeURIComponent(tile.slug)}`}>
            <img className={classes.img} src={tile.img} alt={tile.title}/>
            <Box mt={3}>
                <Typography variant="h6" component="h4">{tile.name}</Typography>
                <Typography>{shortenText(tile.description)}</Typography>
            </Box>
       </BorderUI>
    );
};
