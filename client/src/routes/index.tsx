import React from "react";
// Members
import Members from "../components/Admin/Members/Members";
import CreateMember from "../components/Admin/Members/components/CreateMember";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import Attendance from "../components/Admin/Attendance/Attendance";
import Schedule from "../components/Admin/Schedule/Schedule";
import Department from "../components/Admin/Department/Department";
import Roles from "../components/Admin/Roles/Roles";
import CreateSchedule from "../components/Admin/Schedule/components/CreateSchedule";
import UpdateMember from "../components/Admin/Members/components/UpdateMember";

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/members" component={Members} />
    <Route path="/members/create" component={CreateMember} />
    <Route path="/members/edit" component={UpdateMember} />
    <Route exact path="/attendances" component={Attendance} />
    <Route exact path="/schedules" component={Schedule} />
    <Route exact path="/schedules/create" component={CreateSchedule} />
    <Route exact path="/departments" component={Department} />
    <Route exact path="/roles" component={Roles} />
    {/* Not Found */}
    <Route component={() => <Redirect to="/" />} />
  </Switch>
);
