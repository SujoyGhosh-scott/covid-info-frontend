import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

function App() {
  const [country, setCountry] = useState("india");
  const [range, setRange] = useState("1mo");

  useEffect(() => {
    const getFromDate = (today) => {
      if (range === "1mo") {
        let lastMonth = today.setMonth(today.getMonth() - 1);
        return moment(lastMonth).format("YYYY-MM-DD");
      } else if (range === "1wk") {
        let lastWeek = today.setDate(today.getDate() - 7);
        return moment(lastWeek).format("YYYY-MM-DD");
      } else if (range === "3mo") {
        //fix 3 month date
        let lastQuater = today.setMonth(today.getMonth() - 3);
        let tempQ = new Date(lastQuater);
        console.log("last quater: ", lastQuater);
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
  }, []);

  return (
    <div className="App">
      <h2>hello from app</h2>
    </div>
  );
}

export default App;
