import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { FaGithub } from "react-icons/fa";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
  },
  form: {
    paddingTop: theme.spacing(2),
  },
  emailField: {
    minWidth: `18rem`,
    margin: 0,
  },
  emailButton: {
    height: `100%`,
  },
  toolbar: {
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  blackBg: {
    backgroundColor: theme.palette.common.black,
  },
}));

interface HeaderProps {
  home?: boolean;
}

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const [session, loading] = useSession();
  const [email, setEmail] = useState("");

  return (
      <AppBar position="static" className={classes.blackBg}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Box className={classes.logo}>
              <Link href="/">
                <a className={classes.link}>
                  <Typography variant="h4" component="h1">
                    🍻
                  </Typography>
                </a>
              </Link>
            </Box>

            <Box mt={2}>
              {session ? (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => signOut()}
                >
                  Sign out
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => signIn("github")}
                  startIcon={<FaGithub />}
                >
                  Sign in with Github
                </Button>
              )}
            </Box>
            <Box width="100%" >
              <form className={classes.form}>
                <Grid container spacing={1} justify="flex-end" alignItems="stretch">
                  <Grid item xs={12} md="auto" >
                  <TextField
                    className={classes.emailField}
                    variant="outlined"
                    margin="normal"
                    id="email"
                    label="Your email address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </Grid>
                  <Grid item xs={12} md="auto" spacing={1}>
                    <Button
                      className={classes.emailButton}
                      type="submit"
                      variant="contained"
                      color="secondary"
                      onClick={() => signIn("email", { email: email })}
                    >
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}
