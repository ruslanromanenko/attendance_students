import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import classes from "./Header.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={classes.headerWrap}>
      <div className={classes.mainContainer}>
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
