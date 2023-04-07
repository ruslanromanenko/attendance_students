import React from "react";

import classes from "./App.module.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = (): JSX.Element => {
  return (
    <div className={classes.appWrap}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
