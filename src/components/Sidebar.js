import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Sidebar({ restaurants }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="sidebar-div">
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        className="expand-button"
      >
        <MenuIcon />
      </ExpandMore>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                key={restaurant.name}
                className="navlinks"
                to={"/" + `${restaurant.name}`}
                style={({ isActive }) => ({
                  color: isActive ? "#00bcd4" : null,
                })}
              >
                {restaurant.name}
              </NavLink>
            );
          })}
          <Outlet />
        </aside>
      </Collapse>
    </div>
  );
}

export default Sidebar;
