import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({}));

export default function () {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={2} xs={0}></Grid>
      <Grid item sm={8} xs={12}>
        <h1>About</h1>
      </Grid>
      <Grid item sm={2} xs={0}></Grid>
    </Grid>
  );
}
