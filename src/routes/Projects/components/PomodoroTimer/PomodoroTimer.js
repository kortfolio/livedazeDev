import React from 'react';

import { Grid, Typography, Card, CardContent, Fab } from '@material-ui/core';
import { mdiTimer } from '@mdi/js';

import Icon from '@mdi/react';
import styles from './PomodoroTimer.styles';
import { withStyles } from '@material-ui/core/styles';
export class PomodoroTimer extends React.Component {
	constructor() {
		super();
		this.state = {
			time: {},
			seconds: 1500,
			isOn: false
		};
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}

	secondsToTime(secs) {
		let hours = Math.floor(secs / (60 * 60));
		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);
		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);
		let obj = {
			h: hours,
			m: minutes,
			s: seconds
		};
		return obj;
	}
	componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
	}

	startTimer() {
		if (this.state.seconds > 0) {
			this.timer = setInterval(this.countDown, 1000);
		}
	}

	stopTimer() {
		this.setState({ isOn: false });
		clearInterval(this.timer);
	}
	resetTimer() {
		this.setState({
			time: {},
			seconds: 1500,
			isOn: false
		});
		let timeLeftVar = this.secondsToTime(1500);
		this.setState({ time: timeLeftVar });
		this.timer = 0;
	}

	countDown() {
		let seconds = this.state.seconds - 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds,
			isOn: true
		});

		if (seconds === 0) {
			clearInterval(this.timer);
		}
	}

	render() {
		const { classes } = this.props;
		let start =
			this.state.seconds === 1500 ? (
				<Fab
					variant='extended'
					size='small'
					color='primary'
					aria-label='Add'
					className={classes.outLinedBtn}
					onClick={this.startTimer}
					type='submit'>
					Start
				</Fab>
			) : null;
		let stop = this.state.isOn ? (
			<Fab
				variant='extended'
				size='small'
				color='primary'
				aria-label='Add'
				className={classes.outLinedBtn}
				onClick={this.stopTimer}
				type='submit'>
				Pause
			</Fab>
		) : null;

		let reset =
			this.state.seconds !== 1500 && !this.state.isOn ? (
				<React.Fragment>
					<Fab
						style={{ display: 'inline' }}
						variant='extended'
						size='small'
						color='primary'
						aria-label='Add'
						className={classes.outLinedBtn}
						onClick={this.resetTimer}
						type='submit'>
						Reset
					</Fab>
					<Fab
						variant='extended'
						size='small'
						color='primary'
						aria-label='Add'
						className={classes.outLinedBtn}
						onClick={this.startTimer}
						type='submit'>
						Resume
					</Fab>
				</React.Fragment>
			) : null;
		return (
			<Card className={classes.card}>
				<CardContent>
					<Grid
						container
						style={{
							height: '100%'
						}}>
						<Icon path={mdiTimer} size={3} color='white' />
					</Grid>
				</CardContent>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%'
					}}>
					<CardContent className={classes.content}>
						<span className='white-text'>
							<Typography align='right' className={classes.cardTitleText}>
								Pomodoro Timer
							</Typography>
							<Typography align='right'>
								<span className='timeSuperSet'>
									{this.state.time.m} <sub className='timeSubset'> MIN </sub>
									{this.state.time.s} <sub className='timeSubset'> SEC </sub>
								</span>
								{start}
								{stop}
								{reset}
							</Typography>
						</span>
					</CardContent>
				</div>
			</Card>
		);
	}
}
export default withStyles(styles, { withTheme: true })(PomodoroTimer);
