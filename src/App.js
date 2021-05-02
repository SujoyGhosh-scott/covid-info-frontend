import React, { useState } from "react";
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
import AddSupplier from "./components/AddSupplier";
import Paper from "@material-ui/core/Paper";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#26a69a",
      },
      secondary: {
        main: "#039be5",
      },
      type: mode,
    },
    typography: {
      body1: 600,
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper
          style={{ minHeight: "100vh", borderRadius: "0", padding: "1rem" }}
        >
          <Switch>
            <Route path="/" exact>
              <Home mode={mode} setMode={setMode} />
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
            <Route path="/addsupplier" exact>
              <AddSupplier />
            </Route>
            <Route>
              <Default />
            </Route>
          </Switch>
          <AppBar />
        </Paper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
