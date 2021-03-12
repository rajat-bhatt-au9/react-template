import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Login />
    </Fragment>
  </Router>
);

export default App;
