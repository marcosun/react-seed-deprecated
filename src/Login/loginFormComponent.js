/**
 * Login Form Component Module
 * @module Login/loginFormComponent
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
import {Field, reduxForm, propTypes as reduxFormPropTypes} from 'redux-form';
import {fieldPropTypes} from 'redux-form/lib/propTypes';
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
    if (!values[field]) { // All fields should be non empty
      errors[field] = '不得为空';
    }
  });

  return errors;
};

// The following function returns TextField from material-ui
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

renderTextField.propTypes = {
  ...fieldPropTypes,
};

const styles = (theme) => ({
  form: {
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
 * Login Form Component
 * @extends {Component}
 * @param {Object} props
 * @param {boolean} props.isAuthenticating - Login status
 * @param {function} props.onSubmit - Submit button click callback
 * @param {function} props.handleSubmit - Redux-form submit handler,
 * this function will be called prior to customised form submit handler
 * to check validation and more
 * @param {boolean} pristine - If all fields of the form are in their original state
 * @param {function} reset - Resets all fields
 * @param {boolean} submitting - Form status
 */
@withStyles(styles)
@reduxForm({
  form: 'LOGIN/LOGIN_FORM', // a unique identifier for this form
  validate,
})
class LoginForm extends React.Component {
  /**
   * Props validation
   */
  static propTypes = {
    ...reduxFormPropTypes,
    isAuthenticating: bool.isRequired,
    classes: object.isRequired,
    onSubmit: func.isRequired,
  };

  /**
   * Return react tree of Login Form
   * @return {Component}
   */
  render() {
    const {
      classes,
      isAuthenticating,
      handleSubmit,
      submitting,
    } = this.props;

    const submitClassname = `row ${classes.rowWrapper}`;
    const alert = isAuthenticating ? <div>isAuthenticating</div> : null;
    return (
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
    );
  }
}

export default LoginForm;
