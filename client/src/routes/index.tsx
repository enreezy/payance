import React from "react";
// Members
import Members from "../components/Members/Members";
import CreateMember from "../components/Members/components/CreateMember";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Attendance from "../components/Attendance/Attendance";
import Schedule from "../components/Schedule/Schedule";
import Department from "../components/Department/Department";
import Roles from "../components/Roles/Roles";
import CreateSchedule from "../components/Schedule/components/CreateSchedule";

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/members" component={Members} />
    <Route exact path="/members/create" component={CreateMember} />
    <Route exact path="/attendances" component={Attendance} />
    <Route exact path="/schedules" component={Schedule} />
    <Route exact path="/schedules/create" component={CreateSchedule} />
    <Route exact path="/departments" component={Department} />
    <Route exact path="/roles" component={Roles} />
    {/* Not Found */}
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);
