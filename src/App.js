import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TabComponent from "./components/TabComponent";
import Sidebar from "./components/Sidebar";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":restaurantName" element={<NavComponent />} />
    </Routes>
  );
}

export default App;
//<Route path=":restaurantName" element={<RestaurantDetails />} />
