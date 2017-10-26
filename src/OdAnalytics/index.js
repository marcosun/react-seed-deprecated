/**
 * Od Analytics page
 * @module OdAnalytics
 * @requires react
 * @requires react-router-dom
 */
import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Od Analytics component
 * @return {Component} Od Analytics component
 */
export function OdAnalytics() {
  return (
    <div>
      <h1>OD Analytics Page</h1>
      <Link to='/dashboard'>Go to Dashboard</Link>
    </div>
  );
}

/**
 * Od Analytics container
 * @return {Component} Od Analytics container
 * @function
 */
export default OdAnalytics;
