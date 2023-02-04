import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TabComponent from "./components/TabComponent";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<TabComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
//<Route path=":restaurantName" element={<RestaurantDetails />} />
