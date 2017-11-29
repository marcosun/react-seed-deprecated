/**
 * Home Component
 * @module Home/Component
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
};

/**
 * Home component
 * @param {Object} options
 * @return {Component} Dashboard component
 */
export default function Component() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
