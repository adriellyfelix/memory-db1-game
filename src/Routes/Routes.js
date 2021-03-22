import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserPage from "../pages/UserPage";
import BoardPage from "../pages/BoardPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserPage />
        </Route>

        <Route exact path="/board">
          <BoardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
