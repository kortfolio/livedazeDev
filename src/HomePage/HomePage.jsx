import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { displayToday } from '../_components/date/Clock';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment-duration-format';

class Clock extends React.Component {
    constructor(props) {
        super(props);


        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }



    render() {

        const clock = document.getElementById('clock');
        const rows = [];

        const { user, users } = this.props;
        const wakeUpTime = '2019-01-19T07:00-0800';
        const sleepTime = '2019-01-18T22:00-0800';
        const date = new Date();
        const moment = require("moment");
        let sampleInput = moment(date, 'HH:mm:ss: A').diff(wakeUpTime, 'seconds');
         return (

            <div className="col-md-6 col-md-offset-3">


                <div>It's been </div>

                <div>Since you woke up </div>

                <h4> <Moment format="YYYY/MM/DD">{sleepTime}</Moment></h4>
                <h4>Wake Up time</h4>
                <h4>Testing const date:..
                    {sampleInput}
                </h4>
                {/*Working great*/}
                {/*8:25AM JAN 19 2018 : Need to make changes to dynamically update every second.*/}
                {/*8:32AM JAN 19 2018 : Set Interval, Moment Timer npm.*/}
                {/*8:32AM JAN 19 2018 : npm install moment-timer.*/}
                {/*8:37AM JAN 19 2018 : take Break.*/}
                {/*12:52PM JAN 19 2018 : Stop. Do something elese..*/}
                <Clock/>
                <Moment interval={1000}>
                    <Moment interval="10">{sampleInput}</Moment>
                </Moment>



                <div id="wakeUpTime">
                { moment.duration(sampleInput, "seconds").format("d [days], h [hours], m [minutes], s [seconds]")
                };
                </div>
                <h4>Sleep Time</h4>
                <div>It's been </div>

                <div>Since you woke up </div>

                {moment.duration(123, "minutes").format()};


                <Moment fromNow format="dddd, MMMM Do YYYY, h:mm:ss a">{sleepTime}</Moment>


                { moment.duration(100, "days").format()};
                <h4>---------------homepage.js -------------------</h4>
                <h4><b>Your Remaining day until your another challange</b> <Moment  fromNow>2019-03-08T07:00-0800</Moment></h4>
                {moment.duration(date, "minutes").format("s [seconds], m [minutes], h [hours], d [days]")};
<p> {/*123 minutes. */}

</p>
                <h4><b>From Now :</b> <Moment  fromNow>2019-01-18T07:00-0800</Moment></h4>

                <h4><b>You need to sleep</b> <Moment fromNow>{sleepTime}</Moment></h4>
                <h4>You woke up
                    <b><Moment fromNow  interval={1000} >2019-01-18T07:00-0800</Moment></b>
                     (from homepage.js)
                </h4>
                <h4>JS TESTING</h4>
                { moment.duration(123, "months").format() }
                <p>
                {moment.duration({wakeUpTime}, "minutes").format("h [hrs], m [min]")}
                </p>
                <h4>END JS TESTING</h4>

                <Moment diff={date} interval={1000} unit="hours">2019-01-19T07:00-0800</Moment>


                {/*Time Elasped from current time and wake up time*/}
                {/*    <moment diff={now} format={"DD/MM/YYYY HH:mm:ss"}>{then}</moment>*/}

                {/* {date} implies current time and date*/}
                <div>
                    <Moment add={{ hours: 12 }}>{date}</Moment>
                    <Moment add={{ days: 1, hours: 12 }}>{date}</Moment>
                    <Moment subtract={{ hours: 12 }}>{date}</Moment>
                    <Moment subtract={{ days: 1, hours: 12 }}>{date}</Moment>
                </div>
                <h4>------------------------</h4>
                <div><b>It's been  </b>

                <Moment fromNow ago format={ "HH:m:s"} interval={1000}>2019-01-18T07:00-0800</Moment>
                  </div>

                <h4>--********************------</h4>
                <Moment date={wakeUpTime} />
                <p>Formatting example</p>
                <Moment format="HH:mm:ss" interval={1000} fromNow>
                    2019-01-18T07:00:32-0800
                </Moment>

                <h4>--!!! h:m:s------</h4>

                <Moment fromNow format={"H:m:s"} interval={1000}>
                    2019-01-18T24:00-0800</Moment>{/* This one is Working*/}
                {/*MomentJS Duration From Now */}
                <h4>--!!! END  h:m:s------</h4>
                <h4>--!! Difference-----</h4>
                <Moment duration="2018-11-1T10:59-0500"
                        date="2018-11-1T12:59-0500"
                />
                <h4><p>Current Time - Wake up Time</p></h4>
                <Moment diff="2019-01-18T16:45-0800" format={"h:m:s"} unit="minutes">2019-01-18T07:03-0800</Moment>
                <h4>--!! Difference-----</h4>
                <h4><p>Difference Examples</p></h4>
                <div>
                    <p>                    <Moment diff="2015-04-19">1976-04-19T12:59-0500</Moment></p>
                    <Moment diff="2015-04-19" unit="minutes">1976-04-19T12:59-0500</Moment>
                    <Moment diff="2015-04-19" unit="years" decimal>1976-04-19T12:59-0500</Moment>
                </div>
                <h4>--END Difference-----</h4>
                <h4>--!!! Duration Testing-----</h4>

                <Moment duration="2018-11-1T10:59-0500"
                        date="2018-11-1T12:59-0500"
                />
                <h4>--END Duration Testing-----</h4>


                <div>You will be sleeping---
                    <Moment fromNow format="HH:mm:ss" interval={1000}>2019-01-18T22:00-0800</Moment>
                    {/*MomentJS SLEEPING TIME IS 10 IS SHOWING RIGHT  */}
                    {/*MomentJS Duration From Now */}


                </div>
                <div>{/*Time deducting work hours/ going to work hours..*/}</div>

                {/*Time Elasped from current time and wake up time*/}

                <h4>----------------------------------</h4>
                <h4>Hi {user.firstName}!</h4>
                <p>Welcome to livedaze. </p>

                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };