import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import toRenderProps from "recompose/toRenderProps";
import withState from "recompose/withState";

const SmartMenuState = withState("anchorEl", "updateAnchorEl", null);

const SmartMenuRenderState = toRenderProps(SmartMenuState);

export function SmartMenu({
  key = 0,
  children,
  name = "smart-menu",
  actionIcon
}) {
  return (
    <SmartMenuRenderState>
      {({ anchorEl, updateAnchorEl }) => {
        const ActionIcon = actionIcon;
        const uid = name + "-" + key;
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };
        return (
          <React.Fragment>
            <IconButton
              aria-owns={open ? uid : ""}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            >
              <ActionIcon />
            </IconButton>
            <Menu
              id={uid}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {children({ handleClose: () => updateAnchorEl(null) })}
            </Menu>
          </React.Fragment>
        );
      }}
    </SmartMenuRenderState>
  );
}
