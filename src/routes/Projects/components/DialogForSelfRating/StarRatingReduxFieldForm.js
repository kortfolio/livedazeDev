import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { mdiStar, mdiStarOutline, mdiStarHalf } from '@mdi/js';
import { Grid, Fab } from '@material-ui/core';
import { TextField } from 'redux-form-material-ui';
import Icon from '@mdi/react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

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
				spacing={0}>
				<Grid item xs={12} alignItems='center'>
					{value == 0 && 'Rating'}
					{value === 1 && 'Terrible'}
					{value === 2 && 'Bad'}
					{value === 3 && 'OK'}
					{value === 4 && 'Good'}
					{value === 5 && 'Excellent'}
				</Grid>

				<Grid item xs={12} alignItems='center'>
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
