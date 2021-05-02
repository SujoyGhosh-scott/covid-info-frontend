import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { Line } from "react-chartjs-2";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { makeStyles } from "@material-ui/core/styles";

import CountryInput from "./CountryInput";

const useStyles = makeStyles(() => ({
  homeHeader: {
    color: "#039be5",
    display: "flex",
    width: "100%",
  },
  countryButton: {
    height: "3rem",
    marginLeft: "1rem",
    marginTop: "1rem",
  },
  chartButtons: {
    display: "flex",
    justifyContent: " space-around",
    marginTop: "1rem",
  },
  chartButton: {
    padding: "3px",
    borderRadius: "5px",
    border: "1px solid gray",
    background: "transparent",
    color: "gray",
  },
  selected: {
    border: "1px solid #26a69a",
    color: "#26a69a",
  },
}));

export default ({ mode, setMode }) => {
  const [country, setCountry] = useState("india");
  const [range, setRange] = useState("1mo");
  const [chartData, setChartData] = useState([]);
  const [chartLabel, setChartLabel] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getStartingDate = (today) => {
      if (range === "1mo") {
        let lastMonth = today.setMonth(today.getMonth() - 1);
        return moment(lastMonth).format("YYYY-MM-DD");
      } else if (range === "1wk") {
        let lastWeek = today.setDate(today.getDate() - 7);
        return moment(lastWeek).format("YYYY-MM-DD");
      } else if (range === "2mo") {
        //fix 3 month date
        let lastQuater = today.setMonth(today.getMonth() - 2);
        let tempQ = new Date(lastQuater);
        console.log("last quater: ", tempQ);
        console.log("formated: ", moment(tempQ).format("YYYY-MM-DD"));
        return moment(tempQ).format("YYYY-MM-DD");
      }
    };

    let today = new Date();
    let date_to = moment(today).format("YYYY-MM-DD");
    let date_from = getStartingDate(today);
    axios
      .get(
        `https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${date_from}&date_to=${date_to}`
      )
      .then((res) => {
        //console.log("data: ", Object.values(res.data.dates));
        let x = [];
        let x2 = [];
        Object.values(res.data.dates).map((val) => {
          x.push(val.countries.India.today_new_confirmed);
          x2.push(val.countries.India.date);
        });
        x.pop();
        x2.pop();
        console.log("x: ", x);
        setChartData(x);
        setChartLabel(x2);
      });
  }, [country, range]);

  const handleMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  const handleCountrySelect = (e) => {
    console.log("form country select, got: ", e.target.value);
    setCountry(e.target.value);
  };

  const getCountryData = () => {
    console.log("searching with: ", country);
  };

  return (
    <Grid container>
      <Grid item sm={2}></Grid>
      <Grid direction="column" container item sm={8} xs={12}>
        <Grid className={classes.homeHeader}>
          <h1>Stay Safe</h1>
          <IconButton
            style={{ marginLeft: "auto" }}
            color="primary"
            onClick={() => handleMode()}
          >
            {mode === "light" ? <Brightness2Icon /> : <Brightness7Icon />}
          </IconButton>
        </Grid>
        <Typography variant="subtitle2" color="primary">
          Do not go out unless it's really important
        </Typography>
        <Grid style={{ display: "flex", alignItems: "center" }}>
          <CountryInput
            country={country}
            handleCountrySelect={handleCountrySelect}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => getCountryData()}
            className={classes.countryButton}
          >
            Go
          </Button>
        </Grid>
        <Grid className={classes.chartButtons}>
          <button
            onClick={() => setRange("2mo")}
            className={`${classes.chartButton} ${
              range === "2mo" && classes.selected
            }`}
          >
            2mo
          </button>
          <button
            onClick={() => setRange("1mo")}
            className={`${classes.chartButton} ${
              range === "1mo" && classes.selected
            }`}
          >
            1mo
          </button>
          <button
            onClick={() => setRange("1wk")}
            className={`${classes.chartButton} ${
              range === "1wk" && classes.selected
            }`}
          >
            1wk
          </button>
        </Grid>
        <Grid>
          <Line
            data={{
              labels: chartLabel,
              datasets: [
                {
                  label: `New Confirmed Cases in ${country}`,
                  data: chartData,
                  borderWidth: 1,
                  backgroundColor: "#2a9dfa",
                  borderColor: "#3d8ccc",
                },
              ],
            }}
            height={300}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </Grid>
        {console.log("chartdata", chartData)}
        {/**other info */}
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
};
