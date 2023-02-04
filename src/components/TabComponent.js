import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Details from "./TabComponents/Details";
import Location from "./TabComponents/Location";
import Menu from "./TabComponents/Menu";
import Pictures from "./TabComponents/Pictures";

export default function LabTabs() {
  const [value, setValue] = React.useState("Details");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Details />
        </TabPanel>
        <TabPanel value="Location">
          <Location />
        </TabPanel>
        <TabPanel value="Menu">
          <Menu />
        </TabPanel>
        <TabPanel value="Pictures">
          <Pictures />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
