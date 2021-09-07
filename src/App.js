import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Detail from "./component/Detail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/detail">
            <Detail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
