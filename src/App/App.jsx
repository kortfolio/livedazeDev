import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    const dateToFormat = "1976-04-19T12:59-0500";
    return (
      <div>
        <div className="row">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <div>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
