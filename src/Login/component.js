/**
 * Login Component Module
 * @module Login/Component
 * @requires react
 * @requires prop-types
 */
import React from 'react';
import {string, func} from 'prop-types';

/**
 * Login Component
 * @extends {Component}
 * @param {Object} props
 * @param {string} props.username - Login username
 * @param {string} props.password - Login password
 * @param {function} props.onUsernameTyping - Username typing callback
 * @param {function} props.onPasswordTyping - Password typing callback
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
  };

  /**
   * Return react tree of Login page
   * @return {Component}
   */
  render() {
    return (
      <div>
        <h1>登陆页面</h1>
        <form>
          <label>
            用户名：
            <input type='text'
              value={this.props.username}
              onChange={this.props.onUsernameTyping}
            />
          </label>
          <label>
            密码：
            <input type='password'
              value={this.props.password}
              onChange={this.props.onPasswordTyping}
            />
          </label>
        </form>
      </div>
    );
  }
}
