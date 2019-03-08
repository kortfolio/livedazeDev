import React from "react";

import { connect } from "react-redux";
import { userActions } from "../_actions";

import "moment-timezone";
import "moment-duration-format";


import { PomodoroTimer } from "../_components/PomodoroTimer/pomodoroTimer";
import { BeforeSetGoalDate } from "../_components/GoalDate/BeforeSetGoalDate";
import { PreWakeUpTime } from "../_components/WakeUpTime/PreWakeUpTime";
import { BeforeSetSleepTime } from "../_components/SleepTimeCountDown/BeforeSetSleepTime";

import { ConditionalRenderingTest } from "../_components/ConditionalRenderingTest/ConditionalRenderingTest";


class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return () => this.props.dispatch(userActions.delete(id));
  }

  render() {
 
    const startDay = "2018-10-10";
    const date = new Date();
    const moment = require("moment");

    const goal = "2019-03-01";




    return (
      <div className="wrapper">
        {/**Daily To do List **/}
        
        <div className="row flex">
          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <BeforeSetSleepTime />
              </span>
            </div>
          </div>

          {/**Wake Up Time **/}
          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <PreWakeUpTime />
              </span>
            </div>
          </div>

          <div className="col l4 s12">
            <PomodoroTimer />
          </div>
        </div>

        <div className="row flex">
          <div className="col col l4 s12 ">
            <div className="card-panel livedazeGrey">
              <span className="white-text" />
              <ConditionalRenderingTest/>
            </div>
          </div>

          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text">
                <BeforeSetGoalDate />
              </span>
            </div>
          </div>

          <div className="col l4 s12">
            <div className="card-panel livedazeGrey">
              <span className="white-text" />
            </div>
          </div>
</div>
        <script type="text/javascript" src="js/materialize.min.js" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
