import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Details from "./TabComponents/Details";
import Location from "./TabComponents/Location";
import Menu from "./TabComponents/Menu";
import Pictures from "./TabComponents/Pictures";
export default function LabTabs({ restaurants, urlendpoint }) {
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
          <Details urlendpoint={urlendpoint} restaurants={restaurants} />
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
