import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {rootComp as Root} from "./components/root/rootComp";
import React from "react";
export const routes = () => (

  <Router>
    <div>
      <Switch>
      <Route path="/other" component={() => <div>other</div>} />
      <Route path="/other2" component={() => <div>other2</div>} />
      <Route path="/" component={Root} />
      </Switch>
    </div>
  </Router>
);

