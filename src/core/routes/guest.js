import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '../store';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const GuestRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(renderProps) => {
      if (!store.getState().auth.signedIn) {
        return renderMergedProps(Component, renderProps, props);
      }
      return <Redirect to={{ pathname: '/dashboard', state: { from: renderProps.location } }} />;
    }}
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default GuestRoute;
