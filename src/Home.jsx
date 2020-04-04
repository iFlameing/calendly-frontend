import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import calandyImage from "./calandly.png";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Route, Redirect } from "react-router-dom";
import SignUP from "./SignUp";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    marginTop: 180,
    height: 100,
    width: "50%",
    marginLeft: "20%",
    marginRight: "50%"
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: "100%",
    marginLeft: "25%"
  },
  typography: {
    marginTop: "10%",
    fontWeight: "Bold"
  },
  form: {
    marginTop: "2%"
  },
  button: {
    padding: 15,
    width: 100,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
}));

const Home = ({ ...props }) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  return props.isAuthenticated ? (
    <Redirect to="/event/user/me" />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography className={classes.typography} variant="h5">
            Calendly helps you schedule meetings without the back-and-forth
            emails
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="SignUp"
              variant="outlined"
              onChange={event => setEmail(event.target.value)}
            />
            <Route
              path="/signup"
              render={props => <SignUP email={true} {...props} />}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => {
                props.history.replace("/signup");
              }}
            >
              Sign Up
            </Button>
          </form>
        </Grid>
        <Grid item xs={0} md={6}>
          <CardMedia
            className={classes.media}
            image={calandyImage}
            title="calandy"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
