import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCount } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addCount());
    }
  }
}

export const DashboardComponent = ({ count, onClick }) => (
  <div>
    <h1>Dashboard Page</h1>
    <div onClick={onClick}>
      {count}
    </div>
    <Link to='/odAnalytics'>OdAnalytics</Link>
  </div>
);

DashboardComponent.propTypes = { // Validate props type
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);

export default Dashboard;