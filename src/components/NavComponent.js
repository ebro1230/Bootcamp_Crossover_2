import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Routes } from "react-router-dom";
import useFetch from "./useFetch";
import TabComponent from "./TabComponent";

export default function NavComponent() {
  const url = "./Bootcamp_Crossover_2.json";
  const { restaurants, isLoading, error, types } = useFetch(url);
  const [urlendpoint, setUrlendpoint] = useState("");
  return (
    <div className="navContainer">
      <Sidebar
        settingEndpoint={(e) => setUrlendpoint(e)}
        restaurants={restaurants}
      />
      <TabComponent urlendpoint={urlendpoint} restaurants={restaurants} />
    </div>
  );
}
