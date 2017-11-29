/**
 * Login Container Module
 * @module Login/Container
 * @requires react-redux
 * @requires {@link module:Login/Component}
 */
import {connect} from 'react-redux';

import Component from './component';

/**
 * Map redux state to component props
 * @function
 * @param  {Object} state - Root store
 * @param  {Object} ownProps
 * @return {Object} New view model passed to component as props
 */
const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

/**
 * Connected react component
 */
@connect(mapStateToProps, mapDispatchToProps)
class Container extends Component {

}

/**
 * Return redux connected Login page
 */
export default Container;
