/**
 * Login Container Module
 * @module Login/Container
 * @requires react-redux
 * @requires {@link module:Login/Component}
 * @requires {@link module:Login/Actions}
 */
import {connect} from 'react-redux';

import Component from './component';
import {typingUsername, typingPassword} from './actions';

/**
 * @function
 * @param  {Object} state
 * @param  {string} state.username - login username
 * @param  {string} state.password - login password
 * @param  {Object} ownProps
 * @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  return {
    username: state.login.username,
    password: state.login.password,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUsernameTyping: (e) => {
      dispatch(typingUsername(e.target.value));
    },
    onPasswordTyping: (e) => {
      dispatch(typingPassword(e.target.value));
    },
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

/**
 * Login Container
 */
export default Container;
