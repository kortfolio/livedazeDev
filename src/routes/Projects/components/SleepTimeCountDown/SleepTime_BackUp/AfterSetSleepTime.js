import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment-timezone';
import 'moment-duration-format';
import { Spring } from 'react-spring/renderprops';
import { Grid } from '@material-ui/core';

export class AfterSetSleepTime extends React.Component {
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
			<React.Fragment>
				<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
					{(props) => (
						<div style={props}>
							<Grid container justify='flex-end' spacing={8}>
								<Grid item className='timeFixedWidth'>
									{this.diffDuration.hours() > 0 && this.diffDuration.hours()}
								</Grid>
								<Grid item className='timeSubScript'>
									<div className='timeSubScript'>
										{this.diffDuration.hours() > 0 && 'H'}
									</div>
								</Grid>
								<Grid item className='timeFixedWidth'>
									{this.diffDuration.minutes()}
								</Grid>
								<Grid item className='timeSubScript'>
									<div className='timeSubScript'>M</div>
								</Grid>
								<Grid item className='timeFixedWidth'>
									{this.diffDuration.seconds()}
								</Grid>
								<Grid item className='timeSubScript'>
									<div className='timeSubScript'>S</div>
								</Grid>
							</Grid>
						</div>
					)}
				</Spring>
			</React.Fragment>
		);
	}
}
