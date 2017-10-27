/**
 * Login Component Module
 * @module Login/Component
 * @requires react
 */
import React from 'react';
import {string, func} from 'prop-types';

Component.propTypes = {
  username: string.isRequired,
  password: string.isRequired,
  onUsernameTyping: func.isRequired,
  onPasswordTyping: func.isRequired,
};

/**
 * Login Component
 * @param {Object} props
 * @param {string} props.username - login username
 * @param {string} props.password - login password
 * @param {function} props.onUsernameTyping - username typing callback
 * @param {function} props.onPasswordTyping - password typing callback
 * @return {Component}
 */
export default function Component({
  username,
  password,
  onUsernameTyping,
  onPasswordTyping}) {
  return (
    <div>
      <h1>登陆页面</h1>
      <form>
        <label>
          用户名：
          <input type='text' value={username} onChange={onUsernameTyping} />
        </label>
        <label>
          密码：
          <input type='password' value={password} onChange={onPasswordTyping} />
        </label>
      </form>
    </div>
  );
}
