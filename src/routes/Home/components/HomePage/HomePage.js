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
      <h2>Home Route</h2>
    </div>
    <div className="flex-row-center">
      <div className={classes.section}>
        <h3>Routing</h3>
        <span>
          Redirecting and route protection done using:
          <div>
            <span>
          
            </span>
            <span> and </span>
              redux-auth-wrapper
       
          </div>
        </span>
      </div>
      <div className={classes.section}>
        <h4>Logged Out</h4>
        <span>
          User is redirected to <pre>/login</pre> if not authenticated and
          trying to vist:
        </span>
        <ul>
          <li>
            <Link to={LIST_PATH}>Projects</Link>
          </li>
          <li>
            <Link to={ACCOUNT_PATH}>Account</Link>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <h4>Logged In</h4>
        <span>
          User is redirected to <pre>/projects</pre> if authenticated and trying
          to vist:
        </span>
        <ul>
          <li>
            <Link to={LOGIN_PATH}>Login</Link>
          </li>
          <li>
            <Link to={SIGNUP_PATH}>Signup</Link>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <div>
          <h4>Forms</h4>
          <span>Redirecting and route protection done using:</span>
          <div>
            <span>
          
            </span>
          </div>
        </div>
        <span>The following routes use redux-form:</span>
        <Link to={ACCOUNT_PATH}>
          <p>Account Page</p>
        </Link>
      </div>
    </div>
  </div>
)

Home.proptypes = {
  classes: PropTypes.object.isRequired // from enhancer (withStyles)
}

export default Home
