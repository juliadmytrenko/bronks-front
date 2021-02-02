import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
    footer: {
        left: 0,
        width: `100%`,
        height: `-webkit-fill-available`,
        position: `absolute`,
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing(3),
        '& a': {
            textDecoration: `none`,
        },
        marginTop: theme.spacing(2),
    },
    list: {
        listStyle: "none",
    },
    socialMedia: {
        padding: 0,
        display: `flex`,
        gap: `20px`,
        marginTop: theme.typography.fontSize,
    }
}));

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={`${classes.footer}`}>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <section>
                            <Typography variant="h5" gutterBottom>
                                small header
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <ul className={`${classes.list}`}>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                </ul>
                            </Typography>
                        </section>
                        <section>
                            <Typography variant="h5" gutterBottom>
                                small header
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <ul className={`${classes.list}`}>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                </ul>
                            </Typography>
                        </section>
                    </Grid>
                    <Grid item xs={4}>
                        <section>
                            <Typography variant="h5" gutterBottom>
                                small header
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <ul className={`${classes.list}`}>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                </ul>
                            </Typography>
                        </section>
                        <section>
                            <Typography variant="h5" gutterBottom>
                                small header
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <ul className={`${classes.list}`}>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>some text</a>
                                        </Link>
                                    </li>
                                </ul>
                            </Typography>
                        </section>
                    </Grid>
                    <Grid item xs={4}>
                        <section>
                            <Typography variant="h5" gutterBottom>
                                Socials
                            </Typography>
                            <Typography variant="h4" component="div" gutterBottom>
                                <ul className={`${classes.list} ${classes.socialMedia}`}>
                                    <li>
                                        <Link href="#">
                                            <a><FaFacebook/></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><FaTwitter /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><FaInstagram /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><FaYoutube /></a>
                                        </Link>
                                    </li>
                                </ul>
                            </Typography>
                        </section>
                    </Grid>
                </Grid>
            </Container>
            <Divider/>
            <Container>
                <Box marginTop={2}>
                    <Typography variant="body1" component="small">
                        © {new Date().getFullYear()}{` `}
                        <Link href="#"><a>Julia Dmytrenko </a></Link> All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;
