import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// // import tileData from './tileData';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: theme.spacing(3),
        margin: `0 ${theme.spacing(1)}px`,
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: `100%`,
        height: `auto`,
    },
    img: {
        width: `auto`,
        maxWidth: "100%",
        maxHeight: "100%",
        display: `block`,
        margin: `0 auto`,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */



export default function Beverages() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <GridList cellHeight={250} className={classes.gridList} cols={4} spacing={theme.spacing(6)}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img className={classes.img} src={tile.img} alt={tile.title} />
                        {/*<GridListTileBar*/}
                        {/*    title={tile.title}*/}
                        {/*    subtitle={<span>by: {tile.author}</span>}*/}
                        {/*    actionIcon={*/}
                        {/*        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>*/}
                        {/*            <InfoIcon />*/}
                        {/*        </IconButton>*/}
                        {/*    }*/}
                        {/*/>*/}
                    </GridListTile>
                ))}
            </GridList>
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
