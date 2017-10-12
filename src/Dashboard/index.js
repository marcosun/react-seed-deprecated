import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h1>Dashboard Page</h1>
    <Link to='/odAnalytics'>OdAnalytics</Link>
  </div>
);

export default Dashboard;