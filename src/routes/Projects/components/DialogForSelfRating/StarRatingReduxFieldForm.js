import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { mdiStar, mdiStarOutline } from '@mdi/js';
import { Grid, Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import StarRatingComponent from 'react-star-rating-component';

const Emoji = (props) => (
	<span
		className='emoji'
		role='img'
		aria-label={props.label ? props.label : ''}
		aria-hidden={props.label ? 'false' : 'true'}>
		{props.symbol}
	</span>
);

export class StarRatingReduxFieldForm extends React.Component {
	render() {
		const { input: { value, onChange } } = this.props;
		return (
			<Grid
				container
				justify='center'
				direction='row'
				alignItems='center'
				align='center'
				spacing={0}
				style={{
					borderRadius: '4px'
				}}>
				<Grid item xs={2}>
					<Grid item xs={12}>
						{(value === 1 && <Emoji symbol='😵' />) ||
						(value === 2 && <Emoji symbol='😕' />) ||
						(value === 3 && <Emoji symbol='😐' />) ||
						(value === 4 && <Emoji symbol='😀' />) ||
						(value === 5 && <Emoji symbol='😎' />) || <Emoji symbol='😶' />}
					</Grid>
					<Grid item xs={12}>
						<Typography className='ratingLabel'>
							{(value === 1 && 'Terrible') ||
								(value === 2 && 'Bad') ||
								(value === 3 && 'OK') ||
								(value === 4 && 'Good') ||
								(value === 5 && 'Excellent') ||
								'Rating'}
						</Typography>
					</Grid>
				</Grid>

				<Grid item xs={9}>
					<StarRatingComponent
						name='starRating'
						starCount={5}
						onStarClick={(value) => onChange(value)}
						renderStarIcon={(index, value) => {
							return (
								<span>
									<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
										{(props) => (
											<div style={props}>
												<Icon
													path={index <= value ? mdiStar : mdiStarOutline}
													size={1.5}
													color={index <= value ? '#ffd800' : '#909090'}
												/>
											</div>
										)}
									</Spring>
								</span>
							);
						}}
					/>
				</Grid>
			</Grid>
		);
	}
}
