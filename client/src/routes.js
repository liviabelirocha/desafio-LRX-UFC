import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ListRepos from "./pages/ListRepos";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ListRepos} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
