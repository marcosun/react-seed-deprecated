import React from 'react';
import {Link} from 'react-router-dom';

/**
 * OdAnalytics Page
 * @return {Component} OdAnalytics Component
 */
export default function OdAnalytics() {
  return (
    <div>
      <h1>OD Analytics Page</h1>
      <Link to='/dashboard'>Go to Dashboard</Link>
    </div>
  );
}
