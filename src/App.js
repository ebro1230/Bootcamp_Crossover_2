import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
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
