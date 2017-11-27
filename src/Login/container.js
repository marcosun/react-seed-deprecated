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
  loginRequest,
} from './actions';

/**
 * Map redux state to component props
 * @function
 * @param  {Object} state - Root store
 * @param  {Object} ownProps
 * @return {Object} New view model passed to component as props
 */
const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticating: state.login.isAuthenticating,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (value) => {
      // This function will be fired only if validate passed through redux-form
      dispatch(loginRequest(value));
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
