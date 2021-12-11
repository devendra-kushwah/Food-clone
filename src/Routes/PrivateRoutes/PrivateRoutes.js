import React from "react";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "edit-profile",
    component: "editProFile",
  },
  {
    path: "log-out",
    component: "signIn",
  },
  {
    path: "privacy",
    component: "Privacy",
  },
];

function PrivateRoutes() {
  return routes.map(({ path, component }) => (
    <Route key={component} path={`/${path}`} component={component} />
  ));
}

export default PrivateRoutes;
