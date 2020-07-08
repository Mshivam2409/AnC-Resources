import React from "react";
import logo from "./logo.svg";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  MemoryRouter,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        {/* <Route path="/research">
          <ProfilePage />
        </Route> */}
        <Redirect to="/home"></Redirect>
      </Switch>
      {/* <Redirect to="/home"></Redirect> */}
    </HashRouter>
  );
}

export default App;
