import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import UpdatedSignupForm from './UpdatedSignupForm';


const buttonStyle = {
  backgroundColor: '#f7d371',
  color: '#56597a',
  borderRadius: '20px',
  fontFamily: 'isotonic'
}

const SignupForm = ({ pristine, submitting, handleSubmit, classes }) => (
  <form className={classes.root} onSubmit={handleSubmit}>
  <UpdatedSignupForm/>
  
    <div className={classes.submit}>
      <Button
        style={buttonStyle}
        color="primary"
        type="submit"
        variant="contained"
        disabled={pristine || submitting}>
        {submitting ? 'Loading' : 'Sign Up'}
      </Button>
    </div>
  </form>
)

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm - calls onSubmit)
}

export default SignupForm
