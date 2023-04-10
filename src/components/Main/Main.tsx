import React from "react";
import classes from "./Main.module.scss";
import { HomePage, AboutPage, NotFoundPage } from "pages";
import { Routes, Route } from "react-router-dom";
import { PageRoutes } from "types/enums/PageRoutes";

const Main = (): JSX.Element => {
  return (
    <main className={classes.mainWrap}>
      <div className={classes.mainContainer}>
        {
          <Routes>
            <Route path={PageRoutes.Home} element={<HomePage />} />
            <Route path={PageRoutes.About} element={<AboutPage />} />
            <Route path={PageRoutes.NotFound} element={<NotFoundPage />} />
          </Routes>
        }
      </div>
    </main>
  );
};

export default Main;
