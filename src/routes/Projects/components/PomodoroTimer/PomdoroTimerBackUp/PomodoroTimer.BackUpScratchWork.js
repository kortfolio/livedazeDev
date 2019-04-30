import React from 'react';
import { Typography, Card, CardContent, Fab, Grid } from '@material-ui/core';
import { mdiTimerSandEmpty } from '@mdi/js';
import Icon from '@mdi/react';
import styles from '../PomodoroTimer.styles';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
const timerValue = 10;

export class PomodoroTimer extends React.Component {
	constructor() {
		super();
		this.state = {
			isTicking: false,
			completed: 0,
			time: {},
			countDownFrom: timerValue,
			seconds: timerValue,
			isButtonDisabled: false
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

	componentWillUnmount() {
		clearInterval(this.seconds);
		clearInterval(this.timer);
	}

	componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
		this.timer = setInterval(this.progress, 1000);
	}

	progress = (event) => {
		const addValue = 100 / this.state.countDownFrom;
		const { completed } = this.state;
		{
			/* <Fab
								variant='extended'
								className={classes.outLinedBtn}
								size='small'
								onClick={this.stopTimer}
								style={{
									display: this.state.isTicking ? '' : 'none'
								}}
								disabled={this.state.isButtonDisabled}
								type='submit'>
								Pause
							</Fab> */
		}
		{
			/* Reset Button */
		}
		if (this.state.isTicking) {
			console.log('ahaha2h');
			this.setState({
				completed: Math.min(completed + addValue, 100)
			});
			// } else if (!this.state.isTicking && this.state.completed > 0) {
			// 	this.setState({
			// 		completed: this.state.completed
			// 	});
		}
		//Start
		if (!this.state.isTicking && completed === 100) {
			console.log('it is 100 !!!!!!!!');
			this.setState({
				completed: 0
			});
		}
		//Stop
		if (!this.state.isTicking && completed < 100) {
			console.log('it is not ticking');
			this.setState({
				completed: completed
			});
			// } else if (!this.state.isTicking && this.state.completed > 0) {
			// 	this.setState({
			// 		completed: this.state.completed
			// 	});
		}
		//Reset
		if (this.timer === 0) {
			this.setState({
				completed: 0
			});
		}
	};

	// if (!this.state.isTicking) {
	// 	console.log('ahaha2h');
	// 	this.setState({
	// 		completed: completed
	// 	});

	// } else if (!this.state.isTicking && this.state.completed > 0) {
	// 	this.setState({
	// 		completed: this.state.completed
	// 	});
	// }

	// } else {
	// 	console.log('ahahah');
	// 	this.setState({
	// 		completed: 0
	// 	});
	// }
	//if (this.state.completed === 100)
	// if (this.state.isTicking && completed != 100) {
	// 	this.setState({
	// 		completed: Math.min(this.state.completed + addValue, 100)
	// 	});
	// } else if (!this.state.isTicking && completed != 100) {
	// 	this.setState({
	// 		completed: this.state.completed
	// 	});
	// } else if (this.state.completed === 100) {
	// 	this.setState({
	// 		completed: 0
	// 	});
	// }
	// };

	// let seconds = this.state.seconds - 1;
	// this.setState({
	// 	isOn: true,
	// 	time: this.secondsToTime(seconds)
	// });

	// if (seconds === 0) {
	// 	this.setState({
	// 		time: {},
	// 		seconds: timerValue,
	// 		isTicking: false
	// 	});
	// 	let timeLeftVar = this.secondsToTime(timerValue);
	// 	this.setState({ time: timeLeftVar });
	// 	this.timer = 0;
	// }

	// } else {
	// 	this.setState({
	// 		completed: 0
	// 	});
	// }

	progressBarController() {
		this.setState({
			isTicking: true
		});
		if (this.state.second !== 0) {
			this.timer = setInterval(this.progress, 1000);
		} else {
			console.log('who ARE U??');
		}
	}
	startTimer() {
		this.setState({
			isTicking: true
		});
		if (this.state.seconds > 0) {
			this.timer = setInterval(this.countDown, 1000);
		} else {
			this.setState({
				isTicking: false
			});
		}
	}

	// this.timer = setInterval(this.progress, 1000);
	//startTimer(event) {
	// 	event.preventDefault();
	// 	this.setState({
	// 		isButtonDisabled: true,
	// 		isTicking: true
	// 	});
	// 	setTimeout(() => this.setState({ isButtonDisabled: false }), 1000);
	// 	if (this.state.seconds < 0) {
	// 		this.timer = setInterval(this.progress, 1000);
	// 	} else {
	// 		clearInterval(this.timer);
	// 	}
	// }

	stopTimer(event) {
		event.preventDefault();
		this.setState({ isTicking: false });
		clearInterval(this.timer);
	}

	resetTimer() {
		this.setState({
			time: {},
			seconds: timerValue,
			isTicking: false
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
			isTicking: true
		});

		if (seconds === 0) {
			this.setState({
				time: {},
				seconds: timerValue,
				isTicking: false
			});
			let timeLeftVar = this.secondsToTime(timerValue);
			this.setState({ time: timeLeftVar });
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
					<LinearProgress
						variant='determinate'
						color='secondary'
						value={this.state.completed}
					/>
					value of this.state.completed : {this.state.completed}
					{/* value of this.state.timervalue : {this.state.countDownFrom}
					<br />
					value of this.state.completed : {this.state.completed}
					<br />
					value ofthis.state.seconds : {this.state.seconds}
					<br />
					value of this.state.time.s : {this.state.time.s} */}
					<span className='white-text'>
						<Typography align='right' className={classes.cardTitleText}>
							Focus Timer
						</Typography>
						<Typography align='right' className={classes.cardTitleText}>
							<span className='timeSuperSet'>
								{this.state.time.m !== 0 && (
									<React.Fragment>
										{this.state.time.m}
										<sub className='timeSubset'> M </sub>
									</React.Fragment>
								)}
								{this.state.time.s} <sub className='timeSubset'> S </sub>
							</span>
						</Typography>
						<Grid container alignItems='flex-start' justify='flex-end' direction='row'>
							{/* Start Button and Stop Button */}
							<Fab
								variant='extended'
								className={classes.outLinedBtn}
								size='small'
								onClick={this.startTimer}
								disabled={this.state.isButtonDisabled}
								style={{
									display: this.state.isTicking ? 'none' : ''
								}}
								display={'none'}
								type='submit'>
								Start
							</Fab>
							<Fab
								variant='extended'
								className={classes.outLinedBtn}
								size='small'
								onClick={this.stopTimer}
								style={{
									display: this.state.isTicking ? '' : 'none'
								}}
								disabled={this.state.isButtonDisabled}
								type='submit'>
								Pause
							</Fab>
							{/* Reset Button */}
							<Fab
								variant='extended'
								size='small'
								className={classes.outLinedBtn}
								disabled={
									!this.state.isTicking && this.state.completed > 0 ? false : true
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
