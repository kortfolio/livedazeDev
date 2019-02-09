import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';
import {userActions} from '../_actions';
import {displayToday} from '../_components/date/Clock';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment-duration-format';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col,Icon } from 'react-materialize';
import M from 'materialize-css';


class SomeComponent extends React.Component {
  // get a reference to the element after the component has mounted
  componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }



  render(){
    return (
      <ul className={this.props.classes}
          ref={ (sidenav) => {this.sidenav = sidenav} }
          id={this.props.id}>
          // menuItems
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>

      </ul>
    )
  }
}
