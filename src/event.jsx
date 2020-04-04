import Divider from "@material-ui/core/Divider";
import Title from "./elements/Title";
import styled from "styled-components";
import { EventItem } from "./components/EventCard";
import React, { useState, useEffect } from "react";
import { Container, Page } from "./elements/Gridding";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";

import { RowFAB } from "./components/RowFAB";

const Events = styled(Container)`
  padding: 12px;
`;

const Event = (props) => {
  const [items, setItems] = useState([]);
  const googleid = localStorage.getItem("googleId");
  useEffect(() => {
    fetch(`https://fast-dawn-06134.herokuapp.com/users/${googleid}/event`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          setItems(Object.values(data.events));
        }
      });
  }, []);

  return (
    <Page>
      <Grid item xs style={{ marginTop: 20 }}>
        <Title>Event Types</Title>
        <RowFAB right component={Link} to="/event/new" />
        <Divider />
      </Grid>
      <Events>
        <Grid container spacing={2}>
          {items.length > 0
            ? items.map((item) => (
                <EventItem
                  title={item.title}
                  length={item.duration}
                  type={item.type}
                  path={item.link}
                  {...props}
                />
              ))
            : null}
        </Grid>
      </Events>
    </Page>
  );
};

export default withRouter(Event);
