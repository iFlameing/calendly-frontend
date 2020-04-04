import React from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Timer from "@material-ui/icons/Timer";

import { Item } from "../elements/Gridding";

const EventCard = styled(Card)`
  min-height: 80px;
`;
const EventTimerIcon = styled(Timer).attrs({
  color: "primary"
})``;

const EventCardHeader = styled(CardHeader).attrs({
  avatar: <EventTimerIcon />,
  titleTypographyProps: {
    noWrap: true,
    style: { maxWidth: "134px" }
  }
})``;

export const EventItem = ({
  title = "Title",
  length = "30mins",
  type = "One-on-One",
  date = "",
  ...props
}) => {
  return (
    <Item xs={12} sm={6} md={4} spacing={3}>
      <EventCard raised={true}>
        <EventCardHeader
          title={title}
          subheader={`${type}, ${length}, ${date}`}
        />
      </EventCard>
    </Item>
  );
};
