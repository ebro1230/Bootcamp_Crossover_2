import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";
import Details from "./TabComponents/Details";
import Location from "./TabComponents/Location";
import Menu from "./TabComponents/Menu";
import Pictures from "./TabComponents/Pictures";
import useWindowResize from "./useWindowResize";

export default function LabTabs(props) {
  const [value, setValue] = React.useState("Details");
  const [position, setPosition] = useState(null);
  const { width, height, findScreenSize } = useWindowResize();
  const [error, setError] = useState(null);
  const address = `${props.restaurant.street}+${props.restaurant.zip}+${props.restaurant.city}+${props.restaurant.state}+${props.restaurant.country}`;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let num = 1;
  useEffect(() => {
    findScreenSize();
  }, []);

  window.addEventListener("resize", () => {
    findScreenSize();
  });

  useEffect(() => {
    fetch(
      `http://api.positionstack.com/v1/forward?access_key=95957f430de63e83ac0e0ec7975be463&query=${address}`
    )
      .then((response) => {
        if (!response.ok) {
          setError(response.status);
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((json) => {
        setPosition([json.data[0].latitude, json.data[0].longitude]);
      })
      .catch((errorMessage) => {
        setError(errorMessage);
      });
  }, [address]);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Details" value="Details" />
            <Tab label="Location" value="Location" />
            <Tab label="Menu" value="Menu" />
            <Tab label="Pictures" value="Pictures" />
          </TabList>
        </Box>
        <TabPanel value="Details">
          <Details restaurant={props.restaurant} />
        </TabPanel>
        <TabPanel value="Location">
          {position ? (
            <Location
              restaurant={props.restaurant}
              position={position}
              height={height - 50}
              error={error}
            />
          ) : error ? (
            <h1>{error}</h1>
          ) : null}
        </TabPanel>
        <TabPanel value="Menu">
          <Menu restaurant={props.restaurant} />
        </TabPanel>
        <TabPanel value="Pictures">
          <Pictures restaurant={props.restaurant} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
