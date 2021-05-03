import React from "react";

import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export default ({ setSRN, yesterdayRegionalData, getRegionalData }) => {
  const handleInpCurr = (e) => {
    setSRN(e.target.value);
  };

  return (
    <Grid container style={{ marginTop: "2rem", display: "flex" }}>
      <FormControl style={{ flex: "1" }} variant="outlined">
        <InputLabel id="region">Select Region</InputLabel>
        <Select labelId="region" onChange={handleInpCurr}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {yesterdayRegionalData.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        onClick={() => getRegionalData()}
        color="secondary"
        style={{ marginLeft: "1rem" }}
      >
        Go
      </Button>
    </Grid>
  );
};
