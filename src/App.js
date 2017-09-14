import React from "react";
import { Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard";
import NewGoal from "./components/newGoal";

const App = () => (
  <div>
    <Link to="/newGoal">Add goal :)</Link>
    <Route exact path="/index" component={Dashboard} />
    <Route exact path="/newGoal" component={NewGoal} />
  </div>
);

export default App;
