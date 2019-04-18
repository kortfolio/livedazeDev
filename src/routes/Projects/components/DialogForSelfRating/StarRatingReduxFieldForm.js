import React from 'react';
import { Spring } from 'react-spring/renderprops';
import {
	mdiStar,
	mdiStarOutline,
	mdiEmoticonNeutralOutline,
	mdiEmoticonAngryOutline,
	mdiEmoticonCoolOutline,
	mdiEmoticonHappyOutline,
	mdiEmoticonSadOutline,
	mdiStarFace
} from '@mdi/js';
import { Grid, Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import StarRatingComponent from 'react-star-rating-component';

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
				style={{ border: '1px solid #0000003b', borderRadius: '4px' }}>
				<Grid item xs={3}>
					<Icon
						path={
							(value == 0 && mdiStarFace) ||
							(value === 1 && mdiEmoticonAngryOutline) ||
							(value === 2 && mdiEmoticonSadOutline) ||
							(value === 3 && mdiEmoticonNeutralOutline) ||
							(value === 4 && mdiEmoticonHappyOutline) ||
							(value === 5 && mdiEmoticonCoolOutline)
						}
						size={1}
						color='#242729'
					/>
					<Typography style={{ color: '#242729' }}>
						{value == 0 && 'Rating'}
						{value === 1 && 'Terrible'}
						{value === 2 && 'Bad'}
						{value === 3 && 'OK'}
						{value === 4 && 'Good'}
						{value === 5 && 'Excellent'}
					</Typography>
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
