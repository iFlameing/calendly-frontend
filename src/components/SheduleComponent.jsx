import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { Route } from "react-router-dom";
import Event from "../event";
import { Paper, Grid } from "@material-ui/core";

export default function Shedule({ ...props }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [discription, setDiscription] = useState("");

  const handleSubmit = (event) => {
    const opts = {
      name,
      email,
      duration,
      date,
      discription,
    };
    event.preventDefault();
    const googleid = localStorage.getItem("googleId");
    fetch(`https://fast-dawn-06134.herokuapp.com/users/${googleid}/schedule`, {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(opts),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        props.history.replace("/event/user/me");
      });
  };

  return (
    <>
      <Paper
        style={{ padding: 16, margin: "auto", maxWidth: 600, marginTop: "10%" }}
      >
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              id="filled-textarea"
              label="Name"
              placeholder="Enter Your New Event"
              multiline
              variant="filled"
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="filled-textarea"
              label="Email"
              placeholder="Platform name"
              multiline
              variant="filled"
              onChange={(event) => setEmail(event.target.value)}
            />{" "}
          </Grid>
          <Grid itemxs={12} md={6}>
            <TextField
              id="filled-textarea"
              label="Duration"
              placeholder="Enter the duration"
              multiline
              variant="filled"
              onChange={(event) => setDuration(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="filled-textarea"
              label="Date"
              placeholder="Date Of your Interview"
              multiline
              variant="filled"
              onChange={(event) => setDate(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="filled-textarea"
              label="Discription"
              placeholder="Discription"
              multiline
              variant="filled"
              onChange={(event) => setDiscription(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              onClick={handleSubmit}
              color="secondary"
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Route path="/event/user/me" component={Event} />
    </>
  );
}
