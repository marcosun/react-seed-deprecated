/**
 * Dashboard Component
 * @module Dashboard/Component
 * @requires react
 * @requires react-router-dom
 * @requires prop-types
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {number, func} from 'prop-types';

/**
 * Declares props validation as high as possible,
 * since they serve as documentation.
 * We’re able to do this because of JavaScript function hoisting.
 */
Component.propTypes = {
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
export default function Component({count = 0, onClick}) {
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
