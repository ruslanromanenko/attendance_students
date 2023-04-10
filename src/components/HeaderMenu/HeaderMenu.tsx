import React from "react";
import classes from "./HeaderMenu.module.scss";
import { NavLink } from "react-router-dom";
import { PageRoutes } from "types/enums/PageRoutes";

const HeaderMenu = (): JSX.Element => {
  return (
    <ul className={classes.menuWrap}>
      <li>
        <NavLink to={PageRoutes.Home}>Home</NavLink>
      </li>
      <li>
        <NavLink to={PageRoutes.About}>About</NavLink>
      </li>
    </ul>
  );
};

export default HeaderMenu;
