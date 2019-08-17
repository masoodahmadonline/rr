import {Dashboard} from "./components/common/dashboard";
import {Footer} from "./components/common/footer";
import {Header} from "./components/common/header";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {SideBar} from "./components/common/sidebar";
import PropTypes from "prop-types";
import React from "react";

// eslint-disable-next-line react/no-multi-comp
function Layout({ children }){
  return <><Header/><SideBar/>{children}<Footer/></>;
}
Layout.propTypes = {
  children : PropTypes.object
};

const LayoutRoute = ({ path, ...props }) => {
  return <Route path={path} render={() => <Layout><Route {...props} /></Layout>} />;
};

LayoutRoute.propTypes = {
  path : PropTypes.object
};

export const routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/signin" render={() => "This is signin page without header or footer"}/>
        <LayoutRoute path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  </Router>

);


{/*<Router>*/}
{/*  <div>*/}
{/*    <Switch>*/}
{/*      <Route path="/other" component={() => <div>other</div>} />*/}
{/*      <Route path="/other2" component={() => <div>other2</div>} />*/}
{/*      <Route path="/" component={Root} />*/}
{/*    </Switch>*/}
{/*  </div>*/}
{/*</Router>*/}

