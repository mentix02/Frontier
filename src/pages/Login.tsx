import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { getToken } from "../api/auth";
import Alert from "../components/Alert";
import { logIn } from "../store/auth/actions";
import { Credentials } from "../store/auth/types";
import { useAuthenticated } from "../store/auth/hooks";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: theme.spacing(8),
  },
  error: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface LoginProps {
  location?: {
    state: {
      from?: {
        pathname: string;
      };
      error?: string;
    };
  };
}

function Login(props: LoginProps) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useAuthenticated();
  const [error, setError] = useState<string>("");
  const [fromPath, setFromPath] = useState<string>("/");
  const [loading, setLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  useEffect(() => {
    const propsState = props.location?.state;
    if (propsState) {
      if (propsState.from) setFromPath(propsState.from.pathname);
      if (propsState.error) setError(propsState.error);
    }
    if (isAuthenticated) history.push(fromPath);
  }, [fromPath, history, isAuthenticated, props.location?.state]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Dummy handle submit. Populate with your own code with API.
    e.preventDefault();
    setLoading(true);
    const token = await getToken(credentials);
    dispatch(logIn(token, credentials.username));
    setLoading(false);
    history.push(fromPath);
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            required
            fullWidth
            autoFocus
            id="username"
            name="username"
            margin="normal"
            label="Username"
            variant="outlined"
            autoComplete="off"
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <TextField
            required
            fullWidth
            id="password"
            margin="normal"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            autoComplete="current-password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {loading && <LinearProgress color="secondary" />}
          <Snackbar open={error.length !== 0} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {error}
            </Alert>
          </Snackbar>
          <Button
            fullWidth
            type="submit"
            color="primary"
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;
