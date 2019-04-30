import React from 'react';
import 'moment-timezone';
import moment from 'moment';
import 'moment-duration-format';
import { Grid } from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';
import 'react-datepicker/dist/react-datepicker.css';

export class SleepTimer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			sleepTime: props.sleepTime
		};
		this.now = new Date();
		this.expiration = moment(this.state.sleepTime);
		this.diff = this.expiration.diff(this.now);
		this.diffDuration = moment.duration(this.diff);
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		const moment = require('moment');
		this.setState({ date: new Date() });
		this.now = moment(new Date());
		this.diffDuration = moment.duration(this.expiration.diff(this.now));
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			isClicked: true
		});
	};
	render() {
		return (
			<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
				{(props) => (
					<div style={props}>
						<Grid container justify='flex-end' spacing={8}>
							{this.diffDuration.hours() > 0 && (
								<React.Fragment>
									<Grid item className='timeFixedWidth'>
										{this.diffDuration.hours()}
									</Grid>
									<Grid item className='timeSubScript'>
										<div className='timeSubScript'>H</div>
									</Grid>
								</React.Fragment>
							)}

							{this.diffDuration.minutes() > 0 && (
								<React.Fragment>
									<Grid item className='timeFixedWidth'>
										{this.diffDuration.minutes()}
									</Grid>
									<Grid item className='timeSubScript'>
										<div className='timeSubScript'>M</div>
									</Grid>
								</React.Fragment>
							)}

							{this.diffDuration.seconds() > 0 && (
								<React.Fragment>
									<Grid item className='timeFixedWidth'>
										{this.diffDuration.seconds()}
									</Grid>
									<Grid item className='timeSubScript'>
										<div className='timeSubScript'>S</div>
									</Grid>
								</React.Fragment>
							)}
						</Grid>
						<Grid container justify='flex-end' spacing={8}>
							<Grid item className='goodNight'>
								{this.diffDuration.asSeconds() > 0 ? (
									'LEFT UNTIL ' + moment(this.expiration).format('h:mm a')
								) : (
									(clearInterval(this.timerID), 'Good Night :)')
								)}
							</Grid>
						</Grid>
					</div>
				)}
			</Spring>
		);
	}
}
