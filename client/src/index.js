import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./_helpers";

import "_assets/vendor/nucleo/css/nucleo.css";
import "_assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "_assets/scss/argon-dashboard-react.scss";

import AdminLayout from "_layouts/Admin";
import TeacherLayout from "_layouts/Teacher";
import StudentLayout from "_layouts/Student";
import AuthLayout from "_layouts/Auth";

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/teacher" render={props => <TeacherLayout {...props} />} />
        <Route path="/student" render={props => <StudentLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Redirect from="/" to="/auth" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
