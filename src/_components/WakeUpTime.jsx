import React, { Component } from 'react';

export class WakeUpTime extends React.Component {
  // get a reference to the element after the component has mounted

  constructor(props)
  {
    super(props);
    this.state = {
    userWorkEndTime: "",
    list: []
    };
  }

  changeUserWorkEndTime(input) {
    this.setState({
      userWorkEndTime: input
    });
  }


  componentDidMount() {

    console.log("I am from WakeUpTime.jsx");
    console.log(M);
    M.AutoInit();
  }

  addToList(input) {
    //Make a copy of this.state.list instaed of directly accesing list array.
    let listArray = this.state.list;
    console.log("value of listArray in WakeUpTime: " + listArray + "--");
    listArray.push(input);
    console.log("value of input in wakeuptime.jsx: " + input + "--");

    this.setState({
      list: listArray,
      userWorkEndTime: "",
      showMe: true
    });
  }
  operation() {
      this.setState({
        showMe: !this.state.showMe
      });
    }
  render(){
    return (
      <div className="card-panel livedazeGrey">
        <span className="white-text">
        <div className="livedaze_TabTitle">I am from WakeUpTime.jsx</div>

          <div className="livedaze_TabTitle">When did you get up today?</div>

  <div className="work-end-time">
          <input
                      type="time"
                      id="appt"
                      min="0:00"
                      max="24:00"
                      required
                      onChange={e => this.changeUserWorkEndTime(e.target.value)}
                      value={this.state.userWorkEndTime}
                      name="form-control"
                    />

          <div className="BtnControl">
              <a
              className="waves-effect waves-light btn PrimaryBtnColor"
              onClick={() => this.addToList(this.state.userWorkEndTime)}
              >
              Update
              </a>

          </div>


  </div>
              <ul>
              {this.state.list.map(val => (
                <li>{val}</li>
              ))}
              </ul>
        </span>
      </div>
        )
  }
}
