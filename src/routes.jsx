
import {Route,BrowserRouter as Router} from "react-router-dom";
import {showErrors as ShowErrors} from "./components/UtilComp/wiseMessageContainer";
import {rootComp as Root} from "./components/root/rootComp";
// let Route = Router;
export const routes = () => (

  <Router>
    <div>
      <ShowErrors />
      {/*<Switch>*/}
      <Route path="/" component={Root} />
      {/*</Switch>*/}
    </div>
  </Router>
);
