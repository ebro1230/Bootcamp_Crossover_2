import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import TabComponent from "./TabComponent";

export default function NavComponent() {
  const url = `${process.env.REACT_APP_BACKEND_URL}`;
  const { restaurants, isLoading, error, types } = useFetch(url);
  const { restaurantName } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    restaurants.forEach((restaurant) => {
      if (restaurant.name == restaurantName) {
        setRestaurant(restaurant);
      }
    });
  }, [restaurants, restaurantName]);

  return (
    <>
      <div className="container">
        <img
          src="https://www.panorama-photo.net/photo/765.jpg"
          alt="Picture of Cologne"
          className="banner-img"
        />
        <div className="centered">
          <h1>Best Restaurants in Cologne</h1>
        </div>
      </div>
      <div className="navContainer">
        <Sidebar restaurants={restaurants} />
        {restaurant ? (
          <TabComponent restaurant={restaurant} restaurants={restaurants} />
        ) : null}
      </div>
    </>
  );
}
