import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default ({ title, confirmed, deaths, recovered, open }) => {
  return (
    <>
      <Typography
        variant="h6"
        color="secondary"
        style={{ marginTop: "1rem" }}
        gutterBottom
      >
        {title}
      </Typography>
      <Grid container item sm={12} xs={12} spacing={2}>
        <Grid container item sm={3} xs={6}>
          🤪
          <Typography
            variant="suntitle1"
            gutterBottom
            style={{ marginLeft: "1rem" }}
            color="primary"
          >
            confirmed: {confirmed}
          </Typography>
        </Grid>
        <Grid container item sm={3} xs={6}>
          💀
          <Typography
            variant="suntitle1"
            gutterBottom
            color="primary"
            style={{ marginLeft: "1rem" }}
          >
            deaths: {deaths}
          </Typography>
        </Grid>
        <Grid container item sm={3} xs={6}>
          😎
          <Typography
            variant="suntitle1"
            gutterBottom
            color="primary"
            style={{ marginLeft: "1rem" }}
          >
            recovered: {recovered}
          </Typography>
        </Grid>
        <Grid container item sm={3} xs={6}>
          🤒
          <Typography
            variant="suntitle1"
            gutterBottom
            color="primary"
            style={{ marginLeft: "1rem" }}
          >
            open: {open}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
