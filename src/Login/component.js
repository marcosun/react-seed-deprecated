/**
 * Login Component Module
 * @module Login/Component
 * @requires react
 * @requires prop-types
 * @requires material-ui
 * @requires redux-form
 */
import React from 'react';
import {func, object, bool} from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {withStyles} from 'material-ui/styles';
import {Field, reduxForm} from 'redux-form';
// Css module is disabled, instead I am using css-in-js
// This approach gives css full functionality from javascript
// import Styles from './style.css';

// Form validate function provided to redux form
const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'username',
    'password',
  ];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '不得为空';
    }
  });

  return errors;
};

// The following function returns TextField of material-ui
// This wrapper function is required by redux form
// Consider creating a TextField wrapper function to use in the entire project
const renderTextField = ({
  input,
  meta: {touched, error},
  ...custom
}) => (
  <TextField
    helperText={touched && error}
    error={touched && error && true}
    {...input}
    {...custom}
  />
);

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
  textField: {
    backgroundColor: 'white',
  },
});

/**
 * Login Component
 * @extends {Component}
 * @param {Object} props
 * @param {boolean} props.isAuthenticating - Login status
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
    isAuthenticating: bool.isRequired,
    classes: object.isRequired,
    onSubmit: func.isRequired,
    handleSubmit: func.isRequired,
    pristine: bool.isRequired,
    reset: func.isRequired,
    submitting: bool.isRequired,
  };

  /**
   * Return react tree of Login page
   * @return {Component}
   */
  render() {
    const {
      classes,
      isAuthenticating,
      onSubmit,
      // The following four props are passed in by reduxForm
      // 1. handleSubmit should bind to onSubmit callback of the form
      // 2. pristine is a boolean value indicating
      // if all fields of the form are in their original state
      // 3. reset function resets all fields
      // 4. submitting is a boolean value
      handleSubmit,
      pristine,
      reset,
      submitting,
    } = this.props;
    
    const submitClassname = `row ${classes.rowWrapper}`;
    const alert = isAuthenticating ? <div>isAuthenticating</div> : null;
    return (
      <div className={classes.root}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1>公交云</h1>
          <h3 className={classes.subTitle}>
            <span>i</span>
            <span>Bus</span>
            <span>Cloud</span>
          </h3>
          <Field
            component={renderTextField}
            type='text'
            name='username'
            InputClassName={classes.textField}
            margin='normal'
            placeholder='用户名...'
            autoFocus
          />
          <Field
            component={renderTextField}
            type='password'
            name='password'
            InputClassName={classes.textField}
            margin='normal'
            placeholder='密码...'
          />
          <div className={submitClassname}>
            <Button
              type='submit'
              raised
              color='accent'
              disabled={submitting}
            >
              登录
            </Button>
          </div>
          {alert}
        </form>
      </div>
    );
  }
}

const LoginPageLoginForm = withStyles(styles)(Component);

export default reduxForm({
  form: 'LoginPageLoginForm', // a unique identifier for this form
  validate,
})(LoginPageLoginForm);
