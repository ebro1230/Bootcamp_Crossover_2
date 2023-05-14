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
  const API = `${process.env.REACT_APP_API_KEY}`;
  const address = `${props.restaurant.street}+%20${props.restaurant.zip}+%20${props.restaurant.city}+%20${props.restaurant.state}+%20${props.restaurant.country}`;
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
      `https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=${API}`
    )
      .then((response) => {
        if (!response.ok) {
          alert(`HTTP Status Error: ${response.status}`);
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosition([
          json.features[0].properties.lat,
          json.features[0].properties.lon,
        ]);
      })
      .catch((errorMessage) => {
        alert(`${errorMessage}`);
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
            />
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
