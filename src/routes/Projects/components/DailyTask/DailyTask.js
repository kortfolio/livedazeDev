import React from 'react';
import { Grid, Card, CardMedia } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Icon from '@mdi/react';
import { mdiCat, mdiFormatListCheckbox } from '@mdi/js';

export class DailyTask extends React.Component {
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Grid
					container
					spacing={8}
					alignItems='center'
					justify='center'
					alignContent='center'>
					<Grid Item md={2}>
						<CardMedia>
							<Grid
								container
								justify='center'
								style={{
									height: '100%'
								}}>
								<Icon path={mdiFormatListCheckbox} size={3.5} color='white' />
							</Grid>{' '}
						</CardMedia>{' '}
					</Grid>{' '}
					<Grid item md={10}>
						<Grid item>
							<div
								style={{
									fontFamily: 'isotonicBold',
									color: 'white',
									textTransform: 'uppercase',
									fontSize: 20
								}}>
								daily to do
							</div>{' '}
						</Grid>{' '}
						{/* <FormControlLabelPosition/>
           */}
					</Grid>
				</Grid>
			</form>
		);
	}
}
