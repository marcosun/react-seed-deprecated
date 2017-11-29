/**
 * Login Component Module
 * @module Login/Component
 * @requires react
 * @requires prop-types
 * @requires material-ui
 * @requires {@link module:Login/loginFormComponent}
 * @requires {@link module:Login/Actions}
 */
import React from 'react';
import {object} from 'prop-types';
import {withStyles} from 'material-ui/styles';

import LoginForm from './loginFormComponent';
import {login} from './actions';

// Css module is disabled, instead I am using css-in-js
// This approach gives css full functionality of javascript
// import Styles from './style.css';

const styles = (theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    background: {
      position: 'center',
      size: '100vw 100vh',
      repeat: 'no-repeat',
      image: `url(${require('./traffic.gif')})`,
    },
  },
  form: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%,-50%,0)',
  },
});

/**
 * Login Component
 * @extends {Component}
 * @param {Object} props
 */
@withStyles(styles)
class Component extends React.Component {
  /**
   * Props validation
   */
  static propTypes = {
    classes: object.isRequired,
  };

  /**
   * Return react tree of Login page
   * Pass login object created by redux-form-saga
   * to integrate redux-form with redux-saga
   * @return {Component}
   */
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.form}>
          <LoginForm onSubmit={login} />
        </div>
      </div>
    );
  }
}

export default Component;
