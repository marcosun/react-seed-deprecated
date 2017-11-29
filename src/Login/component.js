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
import {object, bool} from 'prop-types';
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
   * Declares props validation as high as possible,
   * since they serve as documentation.
   * We’re able to do this because of JavaScript function hoisting.
   */
  static propTypes = {
    classes: object.isRequired,
    isLoggedIn: bool.isRequired,
    history: object.isRequired,
  };

  constructor(props) {
    super();
    this.auth(props);
  }

  componentWillReceiveProps(nextProps) {
    this.auth(nextProps);
  }

  /**
   * Authentication service will redirect home page if logged in
   * @param  {Object} props
   * @param  {boolean} props.isLoggedIn - Auth status
   * @param  {Object} props.history - Auth status
   */
  auth(props) {
    props.isLoggedIn && props.history.push('/index');
  }

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
