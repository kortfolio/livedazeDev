import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../_actions';
import {displayToday} from '../_components/date/Clock';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment-duration-format';
import moment from 'moment';

class WorkEndTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T19:00-0800");

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T19:00-0800");

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);

  }

  render() {
    return (<div>
      <div className="livedaze_TabTitle">YOU WILL GO HOME IN</div>
      <h4>{this.diffDuration.hours()}HR: {this.diffDuration.minutes()}MIN: {this.diffDuration.seconds()}SEC</h4>
    </div>);
  }
}

class SinceWakeUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T06:00-0800");

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T06:00-0800");

    // get the difference between the moments
    this.diff = this.now.diff(this.expiration);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);

  }

  render() {
    return (<div>
      <div className="livedaze_TabTitle">IT's BEEN</div>
      <div className="timeSuperSet">
        {this.diffDuration.hours()}<sub class="timeSubset">
          HRS
        </sub>
        {this.diffDuration.minutes()}<sub class="timeSubset">
          MIN
        </sub>
        {this.diffDuration.seconds()}<sub class="timeSubset">
          SEC
        </sub>
      </div>
      <div className="livedaze_TabTitle">SINCE YOU WAKE UP</div>

    </div>);
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    this.now = moment(new Date());

    this.expiration = moment("2019-02-05T22:00-0800");

    // get the difference between the moments
    this.diff = this.now.diff(this.expiration);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);

    // display
    /**
console.log("Days:", this.diffDuration.days());
console.log("Hours:", this.diffDuration.hours());
console.log("Minutes:", this.diffDuration.minutes());
console.log("Seconds:", this.diffDuration.seconds());
**/

    /**
var now = moment(new Date());
var end = moment("2019-03-10");

var duration = moment.duration(now.diff(end));
var dayz = duration.asDays();
console.log(dayz);
var itsbeen = moment([2018, 10, 10]).fromNow();
itsbeen = moment().format('dddd, MMMM Do YYYY, h:mm:ss')
console.log(itsbeen);
console.log("-------***---------------")

var sleepyTime = moment("2019-02-03T23:50-0800");
var whensleep = moment(sleepyTime).toNow(true);

console.log("YOU WILL SLEEP...in " + whensleep);
console.log("YOU WILL SLEEP...in " + whensleep);
console.log("YOU WILL SLEEP...in " + whensleep);
**/
    /**
console.log("formatted val" + formatted);

var seconds = 3820;
var duration = moment.duration(gimoddi, 'seconds');
var formattedd = duration.format("hh:mm:ss");
console.log("먼가 될것같은 느..낌!?" + formattedd); // 01:03:40

var sleeetime = moment.duration(now.diff(sleepyTime));

sleeetime = moment().format('HH:mm:ss');
console.log("-------sleep time---------------")
console.log(sleeetime);
console.log("-------end sleep time---------------")

//<Moment fromNow>{sleepTime}</Moment>

duration = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(duration);

console.log("----------------------");
hours = hours-(days*24);
minutes = minutes-(days*24*60)-(hours*60);
seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
console.log(hours)
console.log(minutes)
console.log(days)

**/
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
    this.now = moment(new Date());
    this.expiration = moment("2019-02-05T22:00-0800");

    // get the difference between the moments
    this.diff = this.expiration.diff(this.now);

    //express as a duration
    this.diffDuration = moment.duration(this.diff);

  }

  render() {
    return (<div className="timeSuperSet">
      {this.diffDuration.hours()}<sub class="timeSubset">
        HRS
      </sub>
      {this.diffDuration.minutes()}<sub class="timeSubset">
        MIN
      </sub>
      {this.diffDuration.seconds()}<sub class="timeSubset">
        SEC
      </sub>
    </div>);
  }
}

class HomePage extends React.Component {

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return(e) => this.props.dispatch(userActions.delete(id));
  }

  render() {

    const clock = document.getElementById('clock');
    const rows = [];

    const {user, users} = this.props;
    const wakeUpTime = '2019-01-19T07:00-0800';
    const sleepTime = '2019-01-18T22:00-0800';

    const startDay = '2018-10-10';
    const date = new Date();
    const moment = require("moment");

    const goal = '2019-03-01';

    const goalFormatted = moment(goal).format('LL');

    let samplezz = moment(date, 'Days').diff(goal);

    let remainingDays = Math.abs(moment(date, 'days').diff(goal, 'days')) + 1;
    let durationSince = Math.abs(moment(date, 'days').diff(startDay, 'days')) + 1;

    return (<div className="container">

      <div className="row">
        <div className="col-sm">
          <div className="row">
            <div className="col s12 m5">
              <div className="card-panel livedazeGrey">
                <span className="white-text">
                  <div className="livedaze_TabTitle">TIME LEFT TODAY</div>
                  <Clock/>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">

          <div className="row">
            {/* !--work time --> */}
            <div className="col s12 m5">
              <div className="card-panel livedazeGrey">
                <span className="white-text">
                  <WorkEndTime/>
                </span>
              </div>
            </div>
          </div>

        </div>
        <div className="col-sm">

          <div className="row">
            {/* !--work time --> */}
            <div className="col s12 m5">
              <div className="card-panel livedazeGrey">
                <span className="white-text">

                  <SinceWakeUp/>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <div className="row">
            <div className="col s12 m5">
              <div className="card-panel livedazeGrey">
                <span className="white-text">
                  MORNING PLANNER
                  <div className="form-group">
                    <label for="usr">Name:</label>
                    <input type="text" className="form-control" id="usr"/>
                  </div>
                  <div className="form-group">
                    <label for="usr">Name:</label>
                    <input type="text" className="form-control" id="usr"/>
                  </div>

                  <div className="form-group">
                    <label for="usr">Name:</label>
                    <input type="text" className="form-control" id="usr"/>
                  </div>

                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">

          <div className="row">
            {/* !--work time --> */}
            <div className="col s12 m5">
              <div className="card-panel livedazeGrey">
                <span className="white-text">
                  <div className="livedaze_TabTitle">My D-day
                  </div>
                  <div className="livedaze_daysRemaining">
                    {remainingDays}
                    <span className="daysLeft">days<br/></span>
                  </div>
                  <div className="goalDate">{goalFormatted}</div>
                  <div>It’s been {durationSince}
                    days since you started.</div>
                </span>
              </div>
            </div>
          </div>

        </div>
        <div class="col-sm">

          <div className="row">
            {/* !--work time --> */}
            <div className="col s12 m5">
              <div className="card-panel livedazeGrey">
                <span className="white-text">
                  <span className="livedazeGreen">Hey mark, how’s your progress?</span>
                  <form action="#">
                    <p>
                      <label>
                        <input name="group1" type="radio" checked="checked"/>
                        <span>Great. i am very focused and productive.</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input name="group1" type="radio"/>
                        <span>IT’s FINE. I AM FOCUSING BUT I AM NOT REALLY SURE.</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input name="group1" type="radio"/>
                        <span>I hate doing this. literally.</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input name="group1" type="radio"/>
                        <span>YOLO! I DIDN’T DO ANYTHING. I WAS JUST WATCHING YOUTUBE.</span>
                      </label>
                    </p>
                  </form>

                  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                  </button>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <h4>----------------------------------</h4>
      <h4>Hi {user.firstName}!</h4>
      <p>Welcome to livedaze.
      </p>

      <h3>All registered users:</h3>
      {users.loading && <em>Loading users...</em>}
      {users.error && <span className="text-danger">ERROR: {users.error}</span>}
      {
        users.items && <ul>
            {
              users.items.map((user, index) => <li key={user.id}>
                {user.firstName + ' ' + user.lastName}
                {
                  user.deleting
                    ? <em>
                        - Deleting...</em>
                    : user.deleteError
                      ? <span className="text-danger">
                          - ERROR: {user.deleteError}</span>
                      : <span>
                          -
                          <a onClick={this.handleDeleteUser(user.id)}>Delete</a>
                        </span>
                }
              </li>)
            }
          </ul>
      }
      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>);
  }
}

function mapStateToProps(state) {
  const {users, authentication} = state;
  const {user} = authentication;
  return {user, users};
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export {
  connectedHomePage as HomePage
};
