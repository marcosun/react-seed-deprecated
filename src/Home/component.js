/**
 * Home Component Module
 * @module Home/Component
 * @requires react
 * @requires prop-types
 */
import React from 'react';
import {number, func} from 'prop-types';

/**
 * Home Component
 * @extends {Component}
 * @param {Object} props
 */
class Component extends React.Component {
  /**
   * Props validation
   * Declares props validation as high as possible,
   * since they serve as documentation.
   * We’re able to do this because of JavaScript function hoisting.
   */
  static propTypes = {
  };

  /**
   * Return react tree of Home page
   * @return {Component}
   */
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Component;
