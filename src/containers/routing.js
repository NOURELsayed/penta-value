import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './homePage'
import Pfrofile from './profilePage'

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Pfrofile" component={Pfrofile} />
    </Router>
  );
}

export default AppRouter;