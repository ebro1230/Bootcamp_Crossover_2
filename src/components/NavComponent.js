import React from "react";
import Sidebar from "./Sidebar";
import { Routes } from "react-router-dom";
import useFetch from "./useFetch";
import TabComponent from "./TabComponent";

export default function NavComponent() {
  const url = "./Bootcamp_Crossover_2.json";
  const { restaurants, isLoading, error, types } = useFetch(url);
  return (
    <div className="navContainer">
      <Sidebar restaurants={restaurants} />
      <TabComponent />
    </div>
  );
}
