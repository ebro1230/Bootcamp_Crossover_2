import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Sidebar({ restaurants }) {
  return (
    <aside className="sidebarNav">
      <a
        className="navlinks homepage"
        href="https://ebro1230.github.io/Bootcamp_Crossover_2"
      >
        Homepage
      </a>
      <hr />
      {restaurants.map((restaurant) => {
        return (
          <NavLink
            key={restaurant.name}
            className="navlinks"
            to={"/" + `${restaurant.name}`}
            style={({ isActive }) => ({ color: isActive ? "#00bcd4" : null })}
          >
            {restaurant.name}
          </NavLink>
        );
      })}
      <Outlet />
    </aside>
  );
}

export default Sidebar;
