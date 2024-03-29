import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllBeerSlugs, getBeer } from "../../lib/beer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { beer } from "../../lib/myTypes";
import BorderUI from "../../components/UI/border";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {

  },
  desc: {
    height: "auto",
    position: "relative",
  },
  producer: {
    width: "auto",
    height: "auto",
    padding: theme.spacing(1),
  },
  background: {
    border: `2px outset ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.secondary.main,
  },
  prices: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& button': {
      borderRadius: `50%`,
    },
  },
  lowestPrice: {
    width: "6rem",
    height: "6rem",
    marginRight: -theme.spacing(1),
    borderColor: "green",
    backgroundColor: "green",
    '& span': {
      fontSize: `1.4rem`,
    },
    '&:hover': {
      backgroundColor: `hsl(120, 100%, 20%)`,
      zIndex: 3,
    },
  },
  highestPrice: {
    width: "4rem",
    height: "4rem",
    marginLeft: -theme.spacing(1),
    borderColor: "red",
    backgroundColor: "red",
    '& span': {
      fontSize: `1rem`,
    },
    '&:hover': {
      backgroundColor: `hsl(0, 100%, 30%)`,
      zIndex: 3,
    },
  },
  regularPrice: {
    width: "7rem",
    height: "7rem",
    zIndex: 1,
    '& span': {
      fontSize: `1.6rem`,
    }
  },
  img: {
    width: `auto`,
    height: "20rem",
    display: `block`,
    margin: `0 auto`,
  },
  strapWithButtons: {
    backgroundColor: theme.palette.common.black,
    // padding: `0 ${theme.spacing(1)}`,
    borderRadius: `0.5rem`,
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: `${theme.spacing(1)}px`,
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
  addToMyList: {
    flex: 1,
  },
  otherProductsButton: {},
}));

export async function getStaticProps({ params }) {
  const beer = await getBeer(params.id);
  return {
    props: {
      beer,
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const slugs = await getAllBeerSlugs();

  // const paths = await JSON.parse(JSON.stringify(res));
  // const paths = res.toString();
  // Get the paths we want to pre-render based on posts

  const paths = slugs.map((slug) => ({
    params: {
      id: slug,
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// interface BeerPageProps {
//     beer: beer;
// }

export default function Beer({ beer }) {
  const classes = useStyles();
  console.log(beer);

  return (
    <Layout>
      <Head>
        <title>{beer.product.name}</title>
      </Head>


      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} md={4} lg={3}>

            <img
              className={classes.img}
              src={beer.product.image}
              alt={beer.product.name}
            />
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <div className={classes.desc}>
            <div>
              <h2>{beer.product.name}</h2>
              <p>{beer.full_description}</p>
            </div>
          </div>
          <div className={clsx(classes.producer)}>
            <Typography variant="h5" component="p">
              Producent: jakisproducent
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <div className={classes.prices}>
            <Button className={classes.lowestPrice} variant="contained">
              {beer.product.prices[0].price_now}
            </Button>
            <Button className={classes.regularPrice} variant="contained" color="secondary">
              {beer.product.basic_price}
            </Button>
            <Button className={classes.highestPrice} variant="contained">
              {beer.product.prices[beer.product.prices.length - 1].price_now}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={clsx(classes.strapWithButtons)}>
            <div className={classes.addToMyList}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
              >
                Dodaj do mojej listy
              </Button>
            </div>
            <Button
              className={classes.otherProductsButton}
              variant="contained"
              color="primary"
            >
              Inne produkty tego producenta
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={3}>

            NAWIGACJA BOCZNA (ta nawigacja ma byc jeszcze bardziej po boku
            position: fixed)
            <ul>
              <li>link1</li>
              <li>link2</li>
              <li>link3</li>
              <li>link4</li>
            </ul>

        </Grid>
        <Grid item xs={12} lg={9}>

            szczegóły techniczne:
            <ul>
              <li>info1</li>
              <li>info2</li>
              <li>info3</li>
              <li>info4</li>
            </ul>

        </Grid>
        <Grid item xs={12}>
         gdzie jest dostępne : (mapka może?)
        </Grid>
        <Grid item xs={12}>
          linki do udostępniania
        </Grid>
        <Grid item xs={12}>
          KOMENTARZE
        </Grid>
      </Grid>
    </Layout>
  );
}
