import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
//<Route path=":restaurantName" element={<RestaurantDetails />} />
