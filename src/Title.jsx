import Typography from "@material-ui/core/Typography";

import React from "react";

const Title({ children }) => (
  <Typography variant="title" gutterBottom>
    {children}
  </Typography>
);

export default Title;
