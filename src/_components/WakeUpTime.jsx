import React, { Component } from 'react';


export class WakeUpTime extends React.Component {
  // get a reference to the element after the component has mounted
  render(){
    return (
      <div className="card-panel livedazeGrey">
        <span className="white-text">
          <div className="livedaze_TabTitle">When did you get up today?</div>{" "}
          <input type="text" className="timepicker" />
          <div className="BtnControl">
              <a className="waves-effect waves-light btn PrimaryBtnColor">Resume</a>
              </div>
              
          <div className="timeSuperSet">
            {" "}
          </div>{" "}
          <div className="BtnControl">
          </div>
        </span>{" "}
      </div>
        )
  }
}
