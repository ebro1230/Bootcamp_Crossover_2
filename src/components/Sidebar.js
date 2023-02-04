import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebarNav">
      <NavLink
        className="navlinks homepage"
        to=""
        style={({ isActive }) => ({ color: isActive ? "#00bcd4" : null })}
      >
        Homepage
      </NavLink>
      <hr />
      <NavLink className="navlinks" to="">
        Restaurant one
      </NavLink>
      <NavLink className="navlinks" to="">
        Restaurant two
      </NavLink>
      <NavLink className="navlinks" to="">
        Restaurant three
      </NavLink>
      <NavLink className="navlinks" to="">
        Restaurant four
      </NavLink>
      <NavLink className="navlinks" to="">
        Restaurant five
      </NavLink>
      <NavLink className="navlinks" to="">
        Restaurant six
      </NavLink>
      <Outlet />
    </aside>
  );
}

export default Sidebar;
