/**
 * Login Component Module
 * @module Login/Component
 * @requires react
 * @requires prop-types
 */
import React from 'react';
import {string, func, object} from 'prop-types';

import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
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
    width: '300px',
    textAlign: 'center',
    color: 'white',
  },
  subTitle: {
    '& span': {
      '&:first-child': {
        color: 'rgb(239,65,53)',
      },
      '&:nth-child(2)': {
        color: 'white',
      },
      '&:last-child': {
        color: 'rgb(0,85,164)',
      },
    },
  },
  rowWrapper: {
    justifyContent: 'center',
    margin: '10px',
  },
  splitWrapper: {
    '& label': {
      flex: '0 0 70px',
      textAlign: 'left',
    },
    '& input': {
      flex: '0 0 150px',
      width: '150px',
    },
  },
});

/**
 * Login Component
 * @extends {Component}
 * @param {Object} props
 * @param {string} props.username - Login username
 * @param {string} props.password - Login password
 * @param {function} props.onUsernameTyping - Username typing callback
 * @param {function} props.onPasswordTyping - Password typing callback
 * @param {function} props.onSubmit - Submit button click callback
 */
class Component extends React.Component {
  state = {
    loading: false,
  };

  /**
   * Props validation
   */
  static propTypes = {
    username: string.isRequired,
    password: string.isRequired,
    onUsernameTyping: func.isRequired,
    onPasswordTyping: func.isRequired,
    onSubmit: func.isRequired,
    classes: object.isRequired,
  };

  /**
   * Return react tree of Login page
   * @return {Component}
   */
  render() {
    const {
      classes,
      username,
      password,
      onUsernameTyping,
      onPasswordTyping,
      onSubmit,
    } = this.props;
    const usernamePasswordClassname = `
      row
      ${classes.rowWrapper}
      ${classes.splitWrapper}
    `;
    const submitClassname = `row ${classes.rowWrapper}`;

    return (
      <div className={classes.root}>
        <form className={classes.form} onSubmit={onSubmit}>
          <h1>公交云</h1>
          <h3 className={classes.subTitle}>
            <span>i</span>
            <span>Bus</span>
            <span>Cloud</span>
          </h3>
          <div className={usernamePasswordClassname}>
            <label>
              用户名：
            </label>
            <input type='text'
              name='username'
              value={username}
              onChange={onUsernameTyping}
            />
          </div>
          <div className={usernamePasswordClassname}>
            <label>
              密码：
            </label>
            <input type='password'
              name='password'
              value={password}
              onChange={onPasswordTyping}
            />
          </div>
          <div className={submitClassname}>
            <Button raised color='accent' type='submit'>登录</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Component);
