import React from "react";
import logo from "./logo.svg";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import Home from "./pages/Home";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import CdevWing from "pages/CDevWing";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/research">
          <CdevWing />
        </Route>
        <Redirect to="/home"></Redirect>
      </Switch>
      {/* <Redirect to="/home"></Redirect> */}
    </HashRouter>
  );
}

export default App;
