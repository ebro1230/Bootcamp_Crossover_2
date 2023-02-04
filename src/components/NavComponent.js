import React from "react";
import Sidebar from "./Sidebar";
import { Routes } from "react-router-dom";
import useFetch from "./useFetch";
export default function NavComponent() {
  const { restaurants, isLoading, error } = useFetch();
  return;
}
