import React from "react";
import classes from "./Main.module.scss";
import { HomePage, SecondPage, NotFoundPage } from "pages";
import { Routes, Route } from "react-router-dom";
import { PageRoutes } from "enums/PageRoutes";

const Main = (): JSX.Element => {
  return (
    <main className={classes.mainWrap}>
      <div className={classes.mainContainer}>
        {
          <Routes>
            <Route path={PageRoutes.Home} element={<HomePage />} />
            <Route path={PageRoutes.Second} element={<SecondPage />} />
            <Route path={PageRoutes.NotFound} element={<NotFoundPage />} />
          </Routes>
        }
      </div>
    </main>
  );
};

export default Main;
