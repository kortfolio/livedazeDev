import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import Button from '@material-ui/core/Button'
import { required, validateEmail } from 'utils/form'
import { TextField } from 'redux-form-material-ui'
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import UpdatedLoginForm from './UpdatedLoginForm';
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
  console.log(response);
}

const buttonStyle = {
  backgroundColor: '#f7d371',
  color: "#56597a",
  borderRadius: "20px",
  fontFamily: 'isotonic'
}

const handleClickShowPassword = () => {
  this.setState(state => ({ showPassword: !state.showPassword }));
};

const LoginForm = ({ pristine, submitting, handleSubmit, classes }) =>


(
 
  <form className={classes.root} onSubmit={handleSubmit}>
  <UpdatedLoginForm/>
   {/*
    <Field
      fullWidth={true}
      name="email"
      component={TextField}
      label="Email"
      validate={[required, validateEmail]}
    />
    
    <Field
      fullWidth={true}
      name="password"
      component={TextField}
      label="Password"
      type="password"
      validate={required}   
    
    />
     */}
    <div 
    className={classes.submit}>
    
      <Button
        style={buttonStyle}
        color='secondary'
        type="submit"
        variant="contained"
        disabled={pristine || submitting}>
        {submitting ? 'Loading' : 'Get Started'}
      </Button>
    </div>
 
    <div 
        className={classes.submit}>
        
        <FacebookLogin
       style={buttonStyle}
       color='secondary'
       type="submit"
       variant="contained"
       disabled={pristine || submitting}
      
        appId="839834729688353"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile"
        
      />
        </div>
    </form>
 
)

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm - calls onSubmit)
}

export default LoginForm
