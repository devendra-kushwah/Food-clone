import React from "react";
import { Route } from "react-router-dom";

const routes = [{ path: "", component: "" }];

function PublicRoutes() {
  return routes.map(({ path, component }) => (
    <Route key={component} path={`/${path}`} component={component} />
  ));
}

export default PublicRoutes;
