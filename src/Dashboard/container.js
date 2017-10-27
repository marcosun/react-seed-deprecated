/**
 * Dashboard container
 * @module Dashboad/Container
 * @requires react
 * @requires react-redux
 * @requires {@link module:DashboardComponent}
 * @requires {@link module:Actions}
 */
import {connect} from 'react-redux';

import Component from './component';
import {addCount} from './actions';

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

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

/**
 * Dashboard container
 * @return {Component} Dashboard container
 * @function
 */
export default Container;
