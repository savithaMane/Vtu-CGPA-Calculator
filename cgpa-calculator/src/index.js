import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { FingerprintSpinner } from "react-epic-spinners";

const Sgpa = lazy(() => import("./components/sgpa"));
const Cgpa = lazy(() => import("./components/CGPA"));
const Login = lazy(() => import("./components/Login"));

const loading = <FingerprintSpinner className="loading" color="#fff" />;

ReactDOM.render(
  <Suspense fallback={loading}>
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={(props) => <App {...props} />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route
            exact
            path="/sgpa"
            component={(props) => <Sgpa {...props} />}
          />
          <Route
            exact
            path="/cgpa"
            component={(props) => <Cgpa {...props} />}
          />
        </Switch>
      </React.Fragment>
    </Router>
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
