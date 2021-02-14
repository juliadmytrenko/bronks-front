import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Link from "next/link";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: `5px 5px 1px 1px ${theme.palette.secondary.main}`,
        // border: `2px outset ${theme.palette.secondary.main}`,
        padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
        width: "100%",
        height: "100%",
        maxHeight: "40rem",
        borderRadius: "1rem",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        textDecoration: "none",
        display: "block",
        zIndex: 2,
        "&:hover": {
            cursor: "pointer",
        },
        "&:active": {
            position: 'relative',
            top: 5,
            left: 5,
            boxShadow: `0px 0px 1px 1px ${theme.palette.secondary.main}`,
        }
    },
    innerBorder: {
        borderRadius: "1rem",
        height: "100%",
        // border: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.primary.light,
    },
}));

interface BorderUIProps {
    className?: string,
    href?: string,
    children?: React.ReactNode,
}

export default function BorderUI({className, href, children, ...other} : BorderUIProps) {
    const classes = useStyles();

    return (
        href ? (
            <Link href={href}>
                <a className={clsx(classes.root, className)}  {...other}>
                    <Box p={3} className={classes.innerBorder}>
                        {children}
                    </Box>
                </a>
            </Link>
            )
            :
            (
                <a className={clsx(classes.root, className)} {...other}>
                    <Box p={3} className={classes.innerBorder}>
                        {children}
                    </Box>
                </a>
            )

    );
}
