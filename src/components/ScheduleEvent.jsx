import React, { useState, useEffect } from "react";
import { Container, Page } from "../elements/Gridding";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { EventItem } from "./s";

const Events = styled(Container)`
  padding: 12px;
`;

const ScheduleEvent = (props) => {
  const [items, setItems] = useState([]);
  const googleid = localStorage.getItem("googleId");
  useEffect(() => {
    fetch(`https://fast-dawn-06134.herokuapp.com/users/${googleid}/schedule`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(Object.values(data.schedules));
      });
  }, []);

  return (
    <Page>
      <Events>
        <Grid container spacing={2}>
          {items.length > 0
            ? items.map((item) => (
                <EventItem
                  title={item.name}
                  length={item.duration}
                  type={item.type}
                  date={item.date}
                  {...props}
                />
              ))
            : null}
        </Grid>
      </Events>
    </Page>
  );
};

export default withRouter(ScheduleEvent);
