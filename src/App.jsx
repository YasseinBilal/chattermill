import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './helpers';
import { alertActions } from './actions';
import './App.scss';

import Login from './components/login/Login';
import Feeds from './components/feeds/FeedsPage';
import Header from './components/header/Header';
import { PrivateRoute } from './components/PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);
    history.listen(() => {
      // clear alert on location change
      const { clearAlerts } = this.props;
      clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="App">
        <Header />
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/feeds" component={Feeds} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

export default connect(mapState, actionCreators)(App);
