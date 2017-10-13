import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);

export default Dashboard;