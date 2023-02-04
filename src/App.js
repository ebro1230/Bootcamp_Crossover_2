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

/*Each entry in the database needs:
  restaurant.name
  restaurant.logo
  restaurant.address -> city
                        state
                        zip
                        country
                        street
                        number
  restaurant.contact -> phone
                        email
  restaurant.hours
  restaurant.tags -> type of food found in restaurant (turkish, vegan, vegetarian, greek, etc.)
  restaurant.delivery -> Yes/No
  restaurant.handicapAccessible -> Yes/No
  restaurant.price -> scale of 1-5 show dollar signs
  restaurant.menu -> url to menu??
  
*/
