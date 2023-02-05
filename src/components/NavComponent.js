import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import TabComponent from "./TabComponent";

export default function NavComponent() {
  const url = "./Bootcamp_Crossover_2.json";
  const { restaurants, isLoading, error, types } = useFetch(url);
  const { restaurantName } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [urlendpoint, setUrlendpoint] = useState("");
  useEffect(() => {
    restaurants.forEach((restaurant) => {
      if (restaurant.name == restaurantName) {
        setRestaurant(restaurant);
      }
    });
  }, [restaurants, restaurantName]);

  return (
    <div className="navContainer">
      <Sidebar
        restaurants={restaurants}
        settingEndpoint={(e) => setUrlendpoint(e)}
      />
      {restaurant ? (
        <TabComponent
          restaurant={restaurant}
          urlendpoint={urlendpoint}
          restaurants={restaurants}
        />
      ) : null}
    </div>
  );
}
