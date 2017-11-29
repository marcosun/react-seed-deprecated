/**
 * Home container
 * @module Home/Container
 * @requires react
 * @requires react-redux
 * @requires {@link module:Home/Component}
 */
import {connect} from 'react-redux';

import Component from './component';

const mapStateToProps = (state, ownProps) => {
};

const mapDispatchToProps = (dispatch, ownProps) => {
};

/**
 * Connected react component
 */
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Container extends Component {

}

/**
 * Dashboard container
 * @return {Component} Dashboard container
 * @function
 */
export default Container;
