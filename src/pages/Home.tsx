import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GitHub from "@material-ui/icons/GitHub";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

import { getCards } from "../api/cards";
import CardList from "../components/CardList";
import Copyright from "../components/Copyright";
import { setCards } from "../store/cards/actions";
import { useCardsLoaded } from "../store/cards/hooks";
import { useUsername, useAuthenticated } from "../store/auth/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 0),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    footer: {
      padding: theme.spacing(0, 0, 4),
      backgroundColor: theme.palette.background.paper,
    },
  })
);

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const username = useUsername();
  const loaded = useCardsLoaded();
  const isAuthenticated = useAuthenticated();

  useEffect(() => {
    if (!loaded) getCards().then((cards) => dispatch(setCards(cards)));
  }, [loaded, dispatch]);

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            gutterBottom
            variant="h2"
            component="h1"
            align="center"
            color="textPrimary"
          >
            {isAuthenticated ? `Welcome, ${username}` : "Frontier"}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            A React template using Typescript made with Redux, react-router-dom,
            and Material UI.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  component="a"
                  size="large"
                  rel="noopener"
                  target="_blank"
                  color="secondary"
                  variant="contained"
                  href="http://github.com/mentix02/frontier"
                >
                  View on <GitHub style={{ marginLeft: "8px" }} />
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        <CardList loading={!loaded} />
      </div>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Frontier
        </Typography>
        <Typography
          component="div"
          align="center"
          variant="subtitle1"
          color="textSecondary"
        >
          Made with ❤️ by{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/mentix02"
          >
            mentix02
          </a>
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}

export default Home;
