import React from "react";
import classes from "./HeaderMenu.module.scss";
import { Link } from "react-router-dom";
import { PageRoutes } from "enums/PageRoutes";

const HeaderMenu = (): JSX.Element => {
  return (
    <ul className={classes.menuWrap}>
      <li>
        <Link to={PageRoutes.Home}>Home</Link>
      </li>
      <li>
        <Link to={PageRoutes.Second}>About</Link>
      </li>
    </ul>
  );
};

export default HeaderMenu;
