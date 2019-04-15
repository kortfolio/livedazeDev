import React from 'react';
import { Typography, Card, CardContent, Fab, Grid } from '@material-ui/core';
import { mdiTimerSandEmpty } from '@mdi/js';
import Icon from '@mdi/react';
import styles from './PomodoroTimer.styles';
import { withStyles } from '@material-ui/core/styles';

const timerValue = 1500;

export class PomodoroTimer extends React.Component {
	constructor() {
		super();
		this.state = {
			time: {},
			seconds: timerValue,
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
			seconds: timerValue,
			isOn: false
		});
		let timeLeftVar = this.secondsToTime(timerValue);
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
			this.setState({ isOn: false });
			clearInterval(this.timer);
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.root}>
				<Icon
					path={mdiTimerSandEmpty}
					size={3.5}
					color='white'
					style={{ height: '100%' }}
				/>
				<CardContent className={classes.content}>
					<span className='white-text'>
						<Typography align='right' className={classes.cardTitleText}>
							Focus Timer
						</Typography>
						<Typography align='right' className={classes.cardTitleText}>
							<span className='timeSuperSet'>
								{this.state.time.m} <sub className='timeSubset'> M </sub>
								{this.state.time.s} <sub className='timeSubset'> S </sub>
							</span>
						</Typography>
						<Grid container alignItems='flex-start' justify='flex-end' direction='row'>
							<Fab
								variant='extended'
								size='small'
								className={classes.outLinedBtn}
								onClick={
									this.state.seconds === timerValue || !this.state.isOn ? (
										this.startTimer
									) : (
										this.stopTimer
									)
								}
								type='submit'>
								{(this.state.seconds === timerValue || !this.state.isOn) && 'Start'}
								{this.state.isOn && 'Stop'}
							</Fab>
							<Fab
								variant='extended'
								size='small'
								className={
									this.state.seconds !== timerValue && !this.state.isOn ? (
										classes.outLinedBtn
									) : (
										classes.disabledBtn
									)
								}
								onClick={this.resetTimer}
								type='submit'>
								Reset
							</Fab>
						</Grid>
					</span>
				</CardContent>
			</Card>
		);
	}
}
export default withStyles(styles, { withTheme: true })(PomodoroTimer);
