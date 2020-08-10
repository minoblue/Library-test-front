import React from "react";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router";

import * as Routes from "./routes";
import LoginForm from "../containers/login.jsx";
import Home from "../containers/home.jsx";
import AdminHome from "../containers/adminHome.jsx";
import Books from "../containers/books.jsx";

// import PrivateRoute from "../components/PrivateRoute";

const PrivateRoute = ({ path, component: Component }) => {
  return !localStorage.getItem("token") ? (
    <Redirect to={Routes.LOGIN} />
  ) : (
    <Route exact path={path} component={Component} />
  );
};

const Router = (props) => {
  return (
    <BrowserRouter>
        <PrivateRoute path="/" component={Home} />
        <PrivateRoute path="/adminHome" component={AdminHome} />
        <PrivateRoute path="/books" component={Books} />
        <Route exact path="/login" component={LoginForm} />
    </BrowserRouter>
  );
};

export default Router;
