import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from "./components/Home";
import Oxygen from "./components/Oxygen";
import Plasma from "./components/Plasma";
import FoodDelivry from "./components/FoodDelivry";
import Vaccine from "./components/Vaccine";
import News from "./components/News";
import About from "./components/About";
import Default from "./components/Default";
import AppBar from "./components/Appbar";

function App() {
  const [country, setCountry] = useState("india");
  const [range, setRange] = useState("2mo");
  const [mode, setMode] = useState("light");

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#26a69a",
      },
      secondary: {
        main: "#039be5",
      },
      type: "light",
    },
  });
  /*
  useEffect(() => {
    const getFromDate = (today) => {
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
    let date_from = getFromDate(today);
    axios
      .get(
        `https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${date_from}&date_to=${date_to}`
      )
      .then((res) => console.log("data: ", res.data));
  }, []);*/

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/oxygen" exact>
              <Oxygen />
            </Route>
            <Route path="/plasma" exact>
              <Plasma />
            </Route>
            <Route path="/news" exact>
              <News />
            </Route>
            <Route path="/food" exact>
              <FoodDelivry />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/vaccine" exact>
              <Vaccine />
            </Route>
            <Route>
              <Default />
            </Route>
          </Switch>
          <AppBar />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
