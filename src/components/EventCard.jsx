import React from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CardContent from "@material-ui/core/CardContent";
import Timer from "@material-ui/icons/Timer";
import FileCopy from "@material-ui/icons/FileCopy";
import Settings from "@material-ui/icons/Settings";
import Edit from "@material-ui/icons/Edit";
import Link2 from "@material-ui/icons/Link";
import Link from "@material-ui/core/Link";

import Delete from "@material-ui/icons/Delete";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import Schedule from "./SheduleComponent";

import { Item } from "../elements/Gridding";
import { SmartMenu } from "./SmartMenu";
import { ListItemText } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Route } from "react-router-dom";

const EventCard = styled(Card)`
  min-height: 80px;
`;
const VisibilityCheckbox = (props) => (
  <Checkbox
    {...props}
    aria-label="Visibility"
    checkedIcon={<Visibility />}
    color="secondary"
    icon={<VisibilityOff />}
  />
);

const EventMenu = () => (
  <React.Fragment>
    <Switch />
    <VisibilityCheckbox />
    <SmartMenu actionIcon={Settings}>
      {({ handleClose }) => (
        <React.Fragment>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Edit />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Link2 />
            </ListItemIcon>
            <ListItemText>Copy Link</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <FileCopy />
            </ListItemIcon>
            <ListItemText>Duplicate</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </React.Fragment>
      )}
    </SmartMenu>
  </React.Fragment>
);
const EventTimerIcon = styled(Timer).attrs({
  color: "primary",
})``;
const EventCardHeader = styled(CardHeader).attrs({
  avatar: <EventTimerIcon />,
  action: <EventMenu />,
  titleTypographyProps: {
    noWrap: true,
    style: { maxWidth: "134px" },
  },
})``;

export const EventItem = ({
  title = "Title",
  length = "30mins",
  type = "One-on-One",
  path = "/robby/30min-phonecall",
  ...props
}) => {
  const EventBody = ({ children }) => (
    <CardContent>
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          props.history.replace(`/${path}`);
        }}
      >
        {children}
      </Link>
    </CardContent>
  );
  return (
    <Item xs={12} sm={6} md={4} spacing={3}>
      <EventCard raised={true}>
        <EventCardHeader title={title} subheader={`${type}, ${length}`} />
        <EventBody>{path}</EventBody>
      </EventCard>
      <Route path={`/${path}`} component={Schedule} />
    </Item>
  );
};
