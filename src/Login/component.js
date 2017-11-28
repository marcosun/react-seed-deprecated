/**
 * Login Component Module
 * @module Login/Component
 * @requires react
 * @requires prop-types
 * @requires material-ui
 */
import React from 'react';
import {func, object, bool} from 'prop-types';
import {withStyles} from 'material-ui/styles';

import LoginForm from './loginFormComponent';
// Css module is disabled, instead I am using css-in-js
// This approach gives css full functionality from javascript
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
 * @param {boolean} props.isAuthenticating - Login status
 * @param {function} props.onSubmit - Submit button click callback
 */
@withStyles(styles)
class Component extends React.Component {
  /**
   * Props validation
   */
  static propTypes = {
    isAuthenticating: bool.isRequired,
    classes: object.isRequired,
    onSubmit: func.isRequired,
  };

  /**
   * Return react tree of Login page
   * @return {Component}
   */
  render() {
    const {
      classes,
      isAuthenticating,
      onSubmit,
    } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.form}>
          <LoginForm onSubmit={onSubmit} isAuthenticating={isAuthenticating} />
        </div>
      </div>
    );
  }
}

export default Component;
