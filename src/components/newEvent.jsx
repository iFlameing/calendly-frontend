import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { Route } from "react-router-dom";
import Event from "../event";
import { Paper, Grid } from "@material-ui/core";

export default function NewEvent({ ...props }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [link, setLink] = useState("");
  const [discription, setDiscription] = useState("");

  const handleSubmit = event => {
    const opts = {
      title,
      link,
      duration
    };
    event.preventDefault();
    fetch("http://localhost:8080/users/114407746104229717172/event", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(opts)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        props.history.push("/event/user/me");
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
              label="Title"
              placeholder="Enter Your New Event"
              multiline
              variant="filled"
              onChange={event => setTitle(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="filled-textarea"
              label="location"
              placeholder="Platform name"
              multiline
              variant="filled"
              onChange={event => setLocation(event.target.value)}
            />{" "}
          </Grid>
          <Grid itemxs={12} md={6}>
            <TextField
              id="filled-textarea"
              label="Duration"
              placeholder="Enter the duration"
              multiline
              variant="filled"
              onChange={event => setDuration(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="filled-textarea"
              label="link"
              placeholder="Date Of your Interview"
              multiline
              variant="filled"
              onChange={event => setLink(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="filled-textarea"
              label="Discription"
              placeholder="Discription"
              multiline
              variant="filled"
              onChange={event => setDiscription(event.target.value)}
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
