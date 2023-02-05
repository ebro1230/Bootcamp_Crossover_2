import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Sidebar({ settingEndpoint, restaurants }) {
  return (
    <aside className="sidebarNav">
      <NavLink
        className="navlinks homepage"
        to="/"
        style={({ isActive }) => ({ color: isActive ? "#00bcd4" : null })}
      >
        Homepage
      </NavLink>
      <hr />
      {restaurants.map((restaurant) => {
        return (
          <NavLink
            className="navlinks"
            onClick={() => settingEndpoint(restaurant.name)}
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
