import React from "react";
import { Link } from "react-router-dom";
import { PageRoutes } from "types/enums/PageRoutes";
import classes from "./NotFoundPage.module.scss";

export const NotFoundPage = (): JSX.Element => {
  return (
    <div className={classes.notFoundPageWrap}>
      <span>404</span>

      <span>
        This page doesn`t exist! Please Go{" "}
        <Link to={PageRoutes.Home}>Home</Link>
      </span>
    </div>
  );
};
