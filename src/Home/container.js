/**
 * Home Container Module
 * @module Home/Container
 * @requires react-redux
 * @requires {@link module:Home/Component}
 */
import {connect} from 'react-redux';

import Component from './component';

const mapStateToProps = (state, ownProps) => {
  return {

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
 * Return redux connected Home page
 */
export default Container;
