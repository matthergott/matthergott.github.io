import React from 'react';
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import './App.css';
import Home from "../Home/Home";
import GolfMap from "../GolfMap/GolfMap";

function App() {
  return (
      <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
            <meta charSet="utf-8"/>
            <title>Info Windows</title>
        </Helmet>

        <Router>
            <div className="app">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/golf" component={GolfMap} />
                </Switch>
            </div>
        </Router>
      </>
  );
}

export default App;
