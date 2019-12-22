import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isValidToken } from '../helpers/fetch-wrapper';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isValidToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);
