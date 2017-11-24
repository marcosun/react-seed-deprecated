/**
 * Login Container Module
 * @module Login/Container
 * @requires react-redux
 * @requires {@link module:Login/Component}
 * @requires {@link module:Login/Actions}
 */
import {connect} from 'react-redux';

import Component from './component';
import {
  typingUsername,
  typingPassword,
  loginRequest,
} from './actions';

/**
 * Map redux state to component props
 * @function
 * @param  {Object} state - Root store
 * @param  {string} state.username - Login username
 * @param  {string} state.password - Login password
 * @param  {Object} ownProps
 * @return {Object} New view model passed to component as props
 */
const mapStateToProps = (state, ownProps) => {
  return {
    username: state.login.username,
    password: state.login.password,
    isAuthenticating: state.login.isAuthenticating,
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
    onSubmit: (e) => { // Process by customised callback function
      e.preventDefault();
      dispatch(loginRequest());
    },
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

/**
 * Return redux connected Login page
 */
export default Container;
