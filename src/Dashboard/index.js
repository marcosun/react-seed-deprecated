import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {number, func} from 'prop-types';
// Separate local imports from dependencies
import {addCount} from '../actions';

// Declared as high as possible, since they serve as documentation
// We’re able to do this because of JavaScript function hoisting
DashboardComponent.propTypes = { // Validate props type
  count: number.isRequired,
  onClick: func.isRequired,
};

/**
 * Dashboard component
 * @param {Number} options.count   Count number to show on page
 * @param {function} options.onClick On click callback
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
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addCount());
    },
  };
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);

export default Dashboard;
