import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  ACCOUNT_PATH,
  LIST_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from 'constants/paths'
import LoginPage from 'routes/Login/components/LoginPage/LoginPage'
import LoginForm from 'routes/Login/components/LoginForm/LoginForm'
import ProviderData from 'routes/Account/components/ProviderDataForm/ProviderDataForm'
import enhance from 'routes/Login/components/LoginPage/LoginPage.enhancer'
import GoogleButton from 'react-google-button'
import Paper from '@material-ui/core/Paper'
import Login from 'routes/Login';

const Enhances = enhance(LoginPage);

export const Home = ({ classes}) => (
  <div className={classes.root}>
  {/*
    <Paper className={classes.panel}>
      <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
    </Paper>
    <div className={classes.orLabel}>or</div>
    <div className={classes.providers}>
      <GoogleButton onClick={googleLogin} />
    </div>
    <div className={classes.signup}>
      <span className={classes.signupLabel}>Need an account?</span>
      <Link className={classes.signupLink} to={SIGNUP_PATH}>
        Sign Up
      </Link>
    </div>
 */}
  
    <div className="flex-row-center">
      <h2>UNDER DEVELOPMENT</h2>
    </div>
    <div className="flex-row-center">
      <div className={classes.section}>
        
      </div>
      <div className={classes.section}>
       
      </div>
      <div className={classes.section}>
     
      </div>
      <div className={classes.section}>
     
      </div>
    </div>
  </div>
)

Home.proptypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default Home
