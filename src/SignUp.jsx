import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import c from "./c.png";
import GoogleLogin from "react-google-login";
import Button from "@material-ui/core/Button";
import Event from "./event";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

async function responseGoogle(res, props) {
  localStorage.setItem("email", res.profileObj.email);
  localStorage.setItem("googleId", res.profileObj.googleId);
  localStorage.setItem("imageUrl", res.profileObj.imageUrl);
  localStorage.setItem("givenName", res.profileObj.givenName);
  props.login();
  props.history.push("/event/user/me");
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
    margin: "10% 0",
    minHeight: 200
  },
  paper: {
    width: 550
  },
  button: {
    marginBottom: 30,
    marginTop: 20,
    width: "40%",
    padding: "1em",
    backgroundColor: "#de5246",
    color: "white"
  },
  Avatar: {
    marginBottom: 50
  },
  t: {
    marginTop: 30,
    lineHeight: "1.6em"
  }
}));

const SignUP = props => {
  const classes = useStyles();

  return (
    <Paper style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={12}>
          <Avatar className={classes.Avatar} alt="Clandely Logo" src={c} />
          <Typography varient="h5">{props.email}</Typography>
          <Typography className={classes.t} varient="h5">
            The easiest way for you to sign up is with Google. This will
            automatically connect your calendar so you can start using Calendly
            right away! <br />
          </Typography>
          <GoogleLogin
            clientId="491502636429-bbcurj56u4gcbb5dobv8a3bcfick01bu.apps.googleusercontent.com"
            render={renderProps => (
              <Button
                variant="contained"
                onClick={renderProps.onClick}
                className={classes.button}
              >
                Google
              </Button>
            )}
            onSuccess={res => responseGoogle(res, props)}
          />
          <Route path="/event/user/me" component={Event} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SignUP;
