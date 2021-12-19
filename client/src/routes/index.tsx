import React from "react";
// Members
import Members from "../components/Members/Members";
import CreateMember from "../components/Members/components/CreateMember";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Attendance from "../components/Attendance/Attendance";
import Schedule from "../components/Schedule/Schedule";
import Roles from "../components/Roles/Roles";

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/members" component={Members} />
    <Route exact path="/members/create" component={CreateMember} />
    <Route exact path="/attendance" component={Attendance} />
    <Route exact path="/schedule" component={Schedule} />
    <Route exact path="/roles" component={Roles} />
    {/* Not Found */}
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);
