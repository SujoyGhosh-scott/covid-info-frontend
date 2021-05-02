import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({}));

export default () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={2} xs={0}></Grid>
      <Grid item sm={8} xs={12}>
        <h1>food</h1>
      </Grid>
      <Grid item sm={2} xs={0}></Grid>
    </Grid>
  );
};
