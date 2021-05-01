import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TimelineIcon from "@material-ui/icons/Timeline";
import OpacityIcon from "@material-ui/icons/Opacity";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import InfoIcon from "@material-ui/icons/Info";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AnnouncementIcon from "@material-ui/icons/Announcement";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    bottom: "0",
    left: "0",
    position: "fixed",
    boxShadow: "0 0 15px #00000040",
  },
  indicator: {
    top: "0px",
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          classes={{
            indicator: classes.indicator,
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            label="chart"
            icon={<TimelineIcon fontSize="small" />}
            onClick={() => history.push("/")}
          />
          <Tab
            label="oxygen"
            icon={<BubbleChartIcon fontSize="small" />}
            onClick={() => history.push("/oxygen")}
          />
          <Tab
            label="plasma"
            icon={<OpacityIcon fontSize="small" />}
            onClick={() => history.push("/plasma")}
          />
          <Tab
            label="food"
            icon={<FastfoodIcon fontSize="small" />}
            onClick={() => history.push("/food")}
          />
          <Tab
            label="news"
            icon={<AnnouncementIcon fontSize="small" />}
            onClick={() => history.push("/news")}
          />
          <Tab
            label="vaccine"
            icon={<LocalHospitalIcon fontSize="small" />}
            onClick={() => history.push("/vaccine")}
          />
          <Tab
            label="about"
            icon={<InfoIcon fontSize="small" />}
            onClick={() => history.push("/about")}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
