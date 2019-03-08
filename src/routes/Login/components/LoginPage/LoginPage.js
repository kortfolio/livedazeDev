import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 
import { SIGNUP_PATH } from 'constants/paths'
import LoginForm from '../LoginForm'

import './../../../../css/CustomCSS.css';

export const LoginPage = ({
  emailLogin,
  googleLogin,
  onSubmitFail,
  classes
}) => (
  
  <div className={classes.root}>
    <div className="container">
    <div className="row">
        <div className="col s12 m6">

        <h5 className="center-align">
        <img
          className="responsive-img center"
          src="../images/welcome.png"
          width="300px"
        />
        </h5>
        <div className="livedazeMissionStatement center">
          get to know yourself and start improving!
        </div>

        {/* LiveDaze Mission Statements */}

        <div className="row valign-wrapper"> {/* Start MS I */}
          <div className="col s2">
            <img src="../images/bulbIcon.png" width="50px"/>
          </div>
          <div className="col s10">
            <span className="liveDazeMsDetails">
              Get to know yourself.<br/>
            </span>
            <span className="subDescriptionMS">
              Figure out what you are good at and what you are not.
            </span>
          </div>
        </div>{/* End MS I */}

        <div className="row valign-wrapper"> {/* Start MS I */}
          <div className="col s2">
            <img src="../images/NotePadIcon.png" width="50px"/>
          </div>
          <div className="col s10">
            <span className="liveDazeMsDetails">
              Get things done.<br/>
            </span>
            <span className="subDescriptionMS">
              Set a realistic goal. and get things done.
            </span>
          </div>
        </div>{/* End MS I */}

        <div className="row valign-wrapper"> {/* Start MS I */}
          <div className="col s2">
            <img src="../images/TrophyIcon.png" width="50px"/>
          </div>
          <div className="col s10">
            <span className="liveDazeMsDetails">
              Keep Improving.<br/>
            </span>
            <span className="subDescriptionMS">
              Keep track of what you have done and keep improving.
            </span>
          </div>
        </div>{/* End MS I */}
      </div>{/* End col s6*/}

        <div className="col s12 m6">{/* START Login Form */}
            <div className="livedazeMissionStatement">Let’s get started!</div>
            <div className="description">
              Start using Livedaze to keep your day organize.
            </div>

           
      <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />

    <div className={classes.signup}>
      <span className={classes.signupLabel}>New to Livedaze? 
      <Link to={SIGNUP_PATH}>
      Create an account.
      </Link>
      </span>
    </div>
            

              <div className="description">OR LOGIN WITH</div><br/>
            <div className="row valign-wrapper center">
              <div className="col s4">
              <img src="../images/LoginWithGoogleBtn.png" width="50px" onClick={googleLogin}/>
              </div>
              <div className="col s4">
              <img src="../images/LoginWithFaceBookBtn.png" width="50px"/>
              </div>
              <div className="col s4">
              <img src="../images/LoginWithGithubBtn.png" width="50px"/>
              </div>
            </div>
            <div className="Sm_Pink right">No thanks, let me just look around.</div>
            
                </div>

      </div>

 {/*<div className={classes.orLabel}>or</div>
    <div className={classes.providers}>
      <GoogleButton onClick={googleLogin} />
    </div>
     */}
    
    </div>
  </div>
)

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  emailLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
  onSubmitFail: PropTypes.func.isRequired, // from enhancer (withHandlers)
  googleLogin: PropTypes.func.isRequired // from enhancer (withHandlers)
}

export default LoginPage
