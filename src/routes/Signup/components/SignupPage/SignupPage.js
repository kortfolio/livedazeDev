import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' 
import { LOGIN_PATH } from 'constants/paths'
import SignupForm from '../SignupForm'
import { Grid } from "@material-ui/core";


const SignupPage = ({ emailSignup, googleLogin, githubLogin, facebookLogin, onSubmitFail, classes, }) => (
  
  <div className={classes.layout}>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <h5 className="center-align">
          <img
            className="responsive-img center"
            src="../images/welcome.png"
            width="300px"
            alt="astronaut and cat"
          />
        </h5>
        <div className="livedazeMissionStatement center">
          get to know yourself and start improving!
        </div>
        {/* LiveDaze Mission Statements */}
        <br />
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <img src="../images/bulbIcon.png" width="50px" alt="bulb icon" />
          </Grid>
          <Grid item xs={10}>
            <span className="liveDazeMsDetails">
              Get to know yourself.
              <br />
            </span>
            <span className="subDescriptionMS">
              Figure out what you are good at and what you are not.
            </span>
          </Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={2}>
            <img
              src="../images/NotePadIcon.png"
              width="50px"
              alt="notepad icon"
            />
          </Grid>
          <Grid item xs={10}>
            <span className="liveDazeMsDetails">
              Get things done.
              <br />
            </span>
            <span className="subDescriptionMS">
              Set a realistic goal. and get things done.
            </span>
          </Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={2}>
            <img
              src="../images/TrophyIcon.png"
              width="50px"
              alt="trophy icon"
            />
          </Grid>
          <Grid item xs={10}>
            <span className="liveDazeMsDetails">
              Keep Improving.
              <br />
            </span>
            <span className="subDescriptionMS">
              Keep track of what you have done and keep improving.
            </span>
          </Grid>
        </Grid>
      </Grid>
    <Grid item xs={12} sm={6}>
      <div className="col s12 m6">
        {/* START Login Form */}
        <div className="livedazeMissionStatement">Let’s get started!</div>
        <div className="description">
          Start using Livedaze to keep your day organize.
        </div>
        <SignupForm onSubmit={emailSignup} onSubmitFail={onSubmitFail} />
        <div className={classes.login}>
          <span className={classes.loginLabel}>Already have an account?  
            <Link to={LOGIN_PATH}>&nbsp;Login now
            </Link>
        </span>
      </div>
      <div className="description">OR LOGIN WITH</div>
          <br />
          <Grid container spacing={24} alignContent="center" justify="center">
            <Grid item xs={4}>
              <img
                src="../images/LoginWithGoogleBtn.png"
                width="50px"
                onClick={googleLogin}
                alt="Login With Google"
              />
            </Grid>

            <Grid item xs={4}>
              <img
                src="../images/LoginWithFaceBookBtn.png"
                width="50px"
                onClick={facebookLogin}
                alt="Login With Facebook"
              />
            </Grid>

            <Grid item xs={4}>
              <img
                src="../images/LoginWithGithubBtn.png"
                width="50px"
                alt="Login With Github"
                onClick={githubLogin}
              />
            </Grid>
          </Grid>

        <div className="Sm_Pink right">
          No thanks, let me just look around.
        </div>
      </div>
    </Grid>
  </Grid>
</div>

)

SignupPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  emailSignup: PropTypes.func.isRequired, // from enhancer (withHandlers)
  googleLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
  onSubmitFail: PropTypes.func.isRequired // from enhancer (reduxForm)
}

export default SignupPage
