import React from "react";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import CdevWing from "pages/CDevWing";
import Firebase, { FirebaseContext } from './firebase';

function App() {
  return (
    <HashRouter>
      <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/login">
          <FirebaseContext.Consumer>
            {firebase => <Login firebase={firebase}/>}
          </FirebaseContext.Consumer>
        </Route>
        <Route path="/register">
          <FirebaseContext.Consumer>
            {firebase => <Register firebase={firebase}/>}
          </FirebaseContext.Consumer>
        </Route>
        <Route path="/reset">
          <FirebaseContext.Consumer>
            {firebase => <Reset firebase={firebase}/>}
          </FirebaseContext.Consumer>
        </Route>
        <Route path="/home">
          <FirebaseContext.Consumer>
            {firebase => <Home firebase={firebase}/>}
          </FirebaseContext.Consumer>
        </Route>
        <Route path="/research">
          <FirebaseContext.Consumer>
            {firebase => <CdevWing firebase={firebase}/>}
          </FirebaseContext.Consumer>
        </Route>
        <Redirect to="/home"></Redirect>
      </Switch>
      </FirebaseContext.Provider>
      {/* <Redirect to="/home"></Redirect> */}
    </HashRouter>
  );
}

export default App;
