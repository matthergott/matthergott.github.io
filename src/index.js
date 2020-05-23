import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import * as serviceWorker from './serviceWorker';

import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import Router from "./components/Router"

import './style/App.css';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
        <meta charSet="utf-8"/>
        <title>Info Windows</title>
      </Helmet>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Router} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
