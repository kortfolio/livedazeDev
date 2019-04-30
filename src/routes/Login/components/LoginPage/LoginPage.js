import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { SIGNUP_PATH } from 'constants/paths';
import LoginForm from '../LoginForm';

import './../../../../css/CustomCSS.css';
import { Grid } from '@material-ui/core';

export const LoginPage = ({
	emailLogin,
	googleLogin,
	facebookLogin,
	githubLogin,
	anonymousLogin,
	al,
	onSubmitFail,
	classes
}) => (
	<div className={classes.layout}>
		<Grid container spacing={24}>
			<Grid item xs={12} sm={6}>
				<h5 className='center-align'>
					<img
						className='responsive-img center'
						src='https://kortfolio.com/images/livedazeicons/welcome.png'
						width='300px'
						alt='astronaut and cat'
					/>
				</h5>
				<div className='livedazeMissionStatement center'>
					get to know yourself and start improving!
				</div>
				{/* LiveDaze Mission Statements */}
				<br />
				<Grid container spacing={24}>
					<Grid item xs={2}>
						<img
							src='https://kortfolio.com/images/livedazeicons/BulbIcon.png'
							width='50px'
							alt='bulb icon'
						/>
					</Grid>
					<Grid item xs={10}>
						<span className='liveDazeMsDetails'>
							Get to know yourself.
							<br />
						</span>
						<span className='subDescriptionMS'>
							Figure out what you are good at and what you are not.
						</span>
					</Grid>
				</Grid>

				<Grid container spacing={24}>
					<Grid item xs={2}>
						<img
							src='https://kortfolio.com/images/livedazeicons/NotePadIcon.png'
							width='50px'
							alt='notepad icon'
						/>
					</Grid>
					<Grid item xs={10}>
						<span className='liveDazeMsDetails'>
							Get things done.
							<br />
						</span>
						<span className='subDescriptionMS'>
							Set a realistic goal. and get things done.
						</span>
					</Grid>
				</Grid>

				<Grid container spacing={24}>
					<Grid item xs={2}>
						<img
							src='https://kortfolio.com/images/livedazeicons/TrophyIcon.png'
							width='50px'
							alt='trophy icon'
						/>
					</Grid>
					<Grid item xs={10}>
						<span className='liveDazeMsDetails'>
							Keep Improving.
							<br />
						</span>
						<span className='subDescriptionMS'>
							Keep track of what you have done and keep improving.
						</span>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div className='col s12 m6'>
					{/* START Login Form */}
					<div className='livedazeMissionStatement'>Let’s get started!</div>
					<div className='description'>
						Start using Livedaze to keep your day organize.
					</div>
					<LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />

					<div className={classes.signup}>
						<span className={classes.signupLabel}>
							New to Livedaze?
							<Link to={SIGNUP_PATH}>&nbsp;Create an account.</Link>
						</span>
					</div>

					<div className='description'>OR LOGIN WITH</div>
					<br />
					<Grid container spacing={24} alignContent='center' justify='center'>
						<Grid item xs={4}>
							<img
								src='https://kortfolio.com/images/livedazeicons/LoginWithGoogleBtn.png'
								width='50px'
								onClick={googleLogin}
								alt='Login With Google'
							/>
						</Grid>

						<Grid item xs={4}>
							<img
								src='https://kortfolio.com/images/livedazeicons/LoginWithFaceBookBtn.png'
								width='50px'
								onClick={facebookLogin}
								alt='Login With Facebook'
							/>
						</Grid>

						<Grid item xs={4}>
							<img
								src='https://kortfolio.com/images/livedazeicons/LoginWithGithubBtn.png'
								width='50px'
								alt='Login With Github'
								onClick={githubLogin}
							/>
						</Grid>
					</Grid>

					<div
						className='Sm_Pink right'
						style={{ cursor: 'pointer' }}
						onClick={anonymousLogin}>
						No thanks, let me just look around.
					</div>
				</div>
			</Grid>
		</Grid>
	</div>
);

LoginPage.propTypes = {
	classes: PropTypes.object.isRequired, // from enhancer (withStyles)
	emailLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
	onSubmitFail: PropTypes.func.isRequired, // from enhancer (withHandlers)
	googleLogin: PropTypes.func.isRequired,
	facebookLogin: PropTypes.func.isRequired // from enhancer (withHandlers)
};

export default LoginPage;
