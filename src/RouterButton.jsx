import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";
export const B = props => <Button component={Link} {...props} />;
export default B;
