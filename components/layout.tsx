import Head from 'next/head'
import Header from "./header";
import Footer from "./footer";
import Container from "@material-ui/core/Container";
import {makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        // "& h1, h2, h3, h4, h5": {
        //     fontFamily: "Yusei Magic",
        // }
    },
}));

export const siteTitle = 'Next.js Sample Website'

interface LayoutProps {
    children: React.ReactNode
    home?: boolean
}

export default function Layout(props : LayoutProps) {
    const classes = useStyles();

    return (
        <div className={clsx('container', classes.root)}>
            <Head>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?myTheme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>

            <Header home={props.home}/>
            <main>
                <Container maxWidth="lg">
                    {props.children}
                </Container>
            </main>
            <Footer/>
        </div>
    )
}
