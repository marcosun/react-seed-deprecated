/**
 * Login Component Module
 * @module Login/Component
 * @requires react
 * @requires prop-types
 */
import React from 'react';
import {string, func} from 'prop-types';

import Styles from './style.css';

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
export default class Component extends React.Component {
  /**
   * Props validation
   */
  static propTypes = {
    username: string.isRequired,
    password: string.isRequired,
    onUsernameTyping: func.isRequired,
    onPasswordTyping: func.isRequired,
    onSubmit: func.isRequired,
  };

  /**
   * Return react tree of Login page
   * @return {Component}
   */
  render() {
    return (
      <div className={Styles.loginContainer}>
        <form className={Styles.formContainer} onSubmit={this.props.onSubmit}>
          <h1>公交云</h1>
          <h3 className={Styles.subTitle}>
            <span>i</span>
            <span>Bus</span>
            <span>Cloud</span>
          </h3>
          <div className={`row ${Styles.username}`}>
            <label>
              用户名：
            </label>
            <input type='text'
              name='username'
              value={this.props.username}
              onChange={this.props.onUsernameTyping}
            />
          </div>
          <div className={`row ${Styles.password}`}>
            <label>
              密码：
            </label>
            <input type='password'
              name='password'
              value={this.props.password}
              onChange={this.props.onPasswordTyping}
            />
          </div>
          <div className={`row ${Styles.submit}`}>
            <button type='submit'>登录</button>
          </div>
        </form>
      </div>
    );
  }
}
