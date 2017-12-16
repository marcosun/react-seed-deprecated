/**
 * Login Form Component Module
 * @module Login/loginFormComponent
 * @requires react
 * @requires prop-types
 * @requires material-ui
 * @requires redux-form
 */
import React from 'react';
import {func, object} from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import {CircularProgress} from 'material-ui/Progress';
import {withStyles} from 'material-ui/styles';
import {Field, reduxForm, propTypes as reduxFormPropTypes} from 'redux-form';
import {fieldPropTypes} from 'redux-form/lib/propTypes';

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
// This wrapper function is required by redux-form
// Consider creating a TextField wrapper function to use in the entire project
const renderTextField = ({
  input,
  meta: {touched, error},
  ...custom
}) => (
  <TextField
    helperText={touched && error}
    error={touched && error ? true : false}
    {...input}
    {...custom}
  />
);

// PropTypes check
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
    '& span:first-child': {
      color: 'rgb(239,65,53)',
    },
    '& span:nth-child(2)': {
      color: 'white',
    },
    '& span:last-child': {
      color: 'rgb(0,85,164)',
    },
  },
  submitWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
  },
  circularProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate3d(-50%,-50%,0)',
  },
  textField: {
    backgroundColor: 'white',
  },
});

/**
 * Login Form Component
 * @extends {Component}
 * @param {Object} props
 * @param {function} props.onSubmit - Submit button click callback
 * @param {function} props.handleSubmit - Redux-form submit handler,
 * this function will be called prior to customised form submit handler
 * to check validation and more
 * @param {boolean} pristine - If all fields of the form
 * are in their original state
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
      handleSubmit,
      submitting,
      error,
    } = this.props;

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
          inputClassName={classes.textField}
          margin='normal'
          placeholder='用户名...'
          autoFocus
        />
        <Field
          component={renderTextField}
          type='password'
          name='password'
          inputClassName={classes.textField}
          margin='normal'
          placeholder='密码...'
        />
        <div className={classes.submitWrapper}>
          <Button
            type='submit'
            raised
            color='accent'
            disabled={submitting}
          >
            登录
          </Button>
          {
            submitting
            && <CircularProgress className={classes.circularProgress}
              size={30} color='accent' />
          }
        </div>
        {error && <strong>{error}</strong>}
      </form>
    );
  }
}

export default LoginForm;
