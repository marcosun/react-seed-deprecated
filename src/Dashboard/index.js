/**
 * Dashboard Page
 * @module Dashboard
 */

/**
 * @requires react
 * @requires react-router-dom
 * @requires react-redux
 * @requires prop-types
 * @requires {@link module:Actions}
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {number, func} from 'prop-types';

import {addCount} from '../actions';

/**
 * Declares props validation as high as possible,
 * since they serve as documentation.
 * We’re able to do this because of JavaScript function hoisting.
 */
DashboardComponent.propTypes = {
  count: number.isRequired,
  onClick: func.isRequired,
};

/**
 * Dashboard component
 * @param {Object} options
 * @param {?number} options.count=0 - Count value to show on page
 * @param {?function} options.onClick - On click callback
 * @return {Component} Dashboard component
 */
export function DashboardComponent({count = 0, onClick}) {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <div onClick={onClick}>
        {count}
      </div>
      <Link to='/odAnalytics'>Go to OdAnalytics</Link>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count, // Count value to show
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => { // This will dispatch an event and processed by reducer
      dispatch(addCount()); // Tell reducer to increment count value
    },
  };
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);

/**
 * Dashboard container
 * @return {Component} Dashboard container
 * @function
 */
export default Dashboard;
