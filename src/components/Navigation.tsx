import React from "react";

import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Landscape from "@material-ui/icons/Landscape";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

import NavigationLink from "./NavigationLink";
import { logOut } from "../store/auth/actions";
import { useAuthenticated } from "../store/auth/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navlink: {
      textDecoration: "none",
    },
    divide: {
      flexGrow: 1,
    },
    icon: {
      marginRight: theme.spacing(2),
    },
  })
);

function Navigation() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useAuthenticated();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Container>
          <Toolbar>
            <Landscape className={classes.icon} />
            <Typography
              noWrap
              to="/"
              variant="h6"
              color="inherit"
              component={NavLink}
              className={classes.navlink}
            >
              Frontier
            </Typography>
            <div className={classes.divide} />
            {isAuthenticated ? (
              <>
                <Button
                  color="inherit"
                  onClick={() => {
                    dispatch(logOut());
                    history.push("/login");
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavigationLink to="/login">Login</NavigationLink>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navigation;
