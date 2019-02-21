import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
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

        <div className="livedazeMissionStatement">Login</div>
        <div className="description">
          Start using Livedaze to keep your day organize.
        </div>

        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={
              "input-field col s12" +
              (submitted && !username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Email</label>
            <input
              type="text"
              className="validate"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {submitted && !username && (
              <div className="help-block">Username is required</div>
            )}
          </div>

          <div
            className={
              "input-field col s12" +
              (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Enter your password</label>

            <input
              type="password"
              className="validate"
              name="password"
              value={password}
              id="password"
              onChange={this.handleChange}
            />

            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>

          {/* Original Source Code
                      <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                          <label htmlFor="password">Password</label>
                          <input type="password" className="form-control" name="password" value={password} id="password"
                                 onChange={this.handleChange}/>
                          {submitted && !password &&
                          <div className="help-block">Password is required</div>
                          }
                      </div>
                      */}

          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            {loggingIn && (
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            )}
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
        <button className="loginBtn loginBtn--facebook">
          Login with Facebook
        </button>

        <button className="loginBtn loginBtn--google">
          Login with Google
        </button>

        </div>
      </div>

      <div className="row">
        <div className="col s6">



          <div className="row">
            <div className="col s6">

            </div>

          </div>

        </div>
        </div>
        {/* END LiveDaze Mission Statement Descriptions */}
        {/*
                <div className="input-field col s12">
                    <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                </div>

                <div className="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">First Name</label>
                </div>
                */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
