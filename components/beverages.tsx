import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useTheme } from '@material-ui/core/styles';
import Tile from "./tile";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: "1rem",
        overflow: 'hidden',
        padding: theme.spacing(3),
        margin: `0 ${theme.spacing(1)}px`,
        "& > *": {
            flex: 1,
            flexBasis: "250px"
        }
    },
}));



export default function Beverages() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
                {tileData.map((tile, index) => (
                    <Tile key={index} tile={tile} />
                ))}
        </div>
    );
}


const tileDataMockup =  {
    img: "https://images.punkapi.com/v2/192.png",
    title: 'Punk IPA 2007 - 2010',
    author: 'Punk',
};

const tileData = [
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
    {
        img: tileDataMockup.img,
        title: tileDataMockup.title,
        author: tileDataMockup.author,
    },
];
