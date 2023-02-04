import React from "react";
import Sidebar from "./Sidebar";
import { Routes } from "react-router-dom";
import useFetch from "./useFetch";
import TabComponent from "./TabComponent";

export default function NavComponent() {
  const { restaurants, isLoading, error } = useFetch();
  return (
    <div className="navContainer">
      <Sidebar />
      <TabComponent />
    </div>
  );
}
