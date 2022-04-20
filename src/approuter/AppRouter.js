import React from "react";
import { Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home";
import About from "../pages/About";

const createBrowserHistory = require("history").createBrowserHistory;
export const history = createBrowserHistory({ basename: "/" });
const router = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute
            path="/"
            component={Home}
            exact={true}
            fulllayout={false}
          />
        </Switch>
        <Switch>
          <PublicRoute
            path="/about"
            component={About}
            exact={true}
            fulllayout={false}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default router;
