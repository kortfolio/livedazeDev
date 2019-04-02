import React from 'react';
import { Grid, Card, Typography, CardContent, Fab, Tooltip } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiStarOutline } from '@mdi/js';
import StarRatingComponent from 'react-star-rating-component';
import { mdiHelpCircleOutline } from '@mdi/js';

const buttonStyle = {
	textDecoration: 'none',
	letterSpacing: '0.1rem',
	fontFamily: 'isotonic',
	fontSize: '12px',
	marginRight: '0px',
	paddingLeft: '20px',
	paddingRight: '20px',
	backgroundColor: 'black'
};
export class SelfDiagnosis extends React.Component {
	state = {
		value: '',
		rating: 1
	};
	onStarClick(nextValue, prevValue, name) {
		this.setState({ rating: nextValue });
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value });
	};

	render() {
		const { classes } = this.props;
		const { rating } = this.state;

		return (
			<Card className={classes.card}>
				<CardContent>
					<Grid
						container
						justify='center'
						style={{
							height: '100%'
						}}>
						<Icon path={mdiStarOutline} size={3} color='white' height='100%' />
					</Grid>
				</CardContent>
				<CardContent className={classes.content}>
					<form onSubmit={this.handleSubmit}>
						<Grid item align='right' className={classes.goalDayTitle}>
							<Tooltip title='Rate your progress. It refreshes every hour'>
								<Icon path={mdiHelpCircleOutline} size={0.5} color='white' />
							</Tooltip>
						</Grid>
						<Typography align='right' className={classes.CardTitleTextDecorator}>
							My Progress
						</Typography>
						<Grid
							container
							align='right'
							alignItems='flex-end'
							justify='flex-end'
							direction='row'>
							<Grid item xs={12}>
								<div className='starRatingComponent'>
									<StarRatingComponent
										name='rate1'
										starCount={5}
										value={rating}
										onStarClick={this.onStarClick.bind(this)}
										starColor='yellow'
									/>
								</div>
							</Grid>

							<Grid item xs={12}>
								<Fab
									style={buttonStyle}
									variant='extended'
									size='small'
									aria-label='Add'
									className={classes.outLinedBtn}>
									Update
								</Fab>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		);
	}
}
export default SelfDiagnosis;
