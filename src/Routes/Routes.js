import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  NotFound,
} from "../Pages";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/" component={LogIn} /> */}
          {/* <Route exact path="/signup" component={SignUp} /> */}
          {/* <Route exact path="/login" component={LogIn} /> */}
          {/* <Route exact path="/product" component={Product} /> */}
          {/* <Route exact path="/blog" component={Blog} /> */}
          {/* <Route exact path="/forgot-password" component={ForgotPassword} /> */}
          {/* <Route exact path="/reset-password" component={NewPassword} /> */}
          {/* <Route exact path="/verify-code" component={ForgotOtp} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};
export default Routes;
