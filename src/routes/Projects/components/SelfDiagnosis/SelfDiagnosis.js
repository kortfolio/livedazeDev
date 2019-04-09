import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebase, firebaseConnect } from 'react-redux-firebase';
import ConfirmCompleteDialog from '../ConfirmCompleteDialog.1';

import { UserIsAuthenticated } from 'utils/router';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@mdi/react';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';
import { mdiStarOutline } from '@mdi/js';
import StarRatingComponent from 'react-star-rating-component';
import { mdiHelpCircleOutline } from '@mdi/js';
import { spinnerWhileLoading } from 'utils/components';
import { withNotifications } from 'modules/notification';

export const SelfDiagnosis = ({
  toggleConfirmDialog,
  toggleConfirmDialog2,
  wasSent,
  enhancedStarRating,
  updatedValue,
  rating,
  classes,
  updateSelfDiagnosis
}) => (
  <Card className={classes.card}>
    <CardContent>
      <Grid
        container
        justify="center"
        style={{
          height: '100%'
        }}
      >
        <Icon path={mdiStarOutline} size={3} color="white" height="100%" />
      </Grid>
    </CardContent>
    <CardContent className={classes.content}>
      <Grid item align="right" className={classes.goalDayTitle}>
        <Tooltip title="Rate your progress. It refreshes every hour">
          <Icon path={mdiHelpCircleOutline} size={0.5} color="white" />
        </Tooltip>
      </Grid>
      <Typography align="right" className={classes.CardTitleTextDecorator}>
        My Progress
      </Typography>
      <Grid
        container
        align="right"
        alignItems="flex-end"
        justify="flex-end"
        direction="row"
      >
        <Grid item xs={12}>
		{/* Dialog - Add Comment about Review */}
          <ConfirmCompleteDialog
            onSubmit={updateSelfDiagnosis}
            open={wasSent}
            rating={100}
			onRequestClose={toggleConfirmDialog}
			starRating={enhancedStarRating}
			style={{fontSize: '30px'}}
          />
     
		  {/* Star Rating Component */}
		  <div className="starRatingComponent">
          <StarRatingComponent
            name="selfRating"
            starCount={5}
            value={rating}
			onStarClick={toggleConfirmDialog}
			emptyStarColor={'#fff'}
			renderStarIcon={() => <span></span>}
          />
		  </div>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

SelfDiagnosis.propTypes = {
  firebase: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  toggleConfirmDialog: PropTypes.func,
  updateStarRatingDialog: PropTypes.func, // from enhancer (withHandlers)
  wasSent: PropTypes.bool, // from enhancer (withStateHandlers)
  isDone: PropTypes.func,
  enhancedStarRating: PropTypes.number
  //rating: PropTypes.number
  //	classes: PropTypes.object.isRequired
};

const enhance = compose(
  withFirebase,
  UserIsAuthenticated,
  withNotifications,
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Create listeners based on current users UID
  firebaseConnect(({ params, uid }) => [
    {
      path: 'ReviewsRating',
      queryParams: ['orderByChild=createdBy', `equalTo=${uid}`]
    }
  ]),
  // Map projects from state to props
  connect(({ firebase: { ordered } }) => ({
    ReviewsRating: ordered.ReviewsRating
  })),
  withStateHandlers(
    ({ initialWasSent = false, initialEnhancedStarRating = 0 }) => ({
      wasSent: initialWasSent,
      enhancedStarRating: initialEnhancedStarRating
    }),

    {
      toggleConfirm: ({ wasSent, rating }) => rating => ({
        wasSent: !wasSent,
        enhancedStarRating: rating
      })
    }
  ),
  withHandlers({
    toggleConfirmDialog: ({ rating, toggleConfirm }) => rating => {
      if (rating > 0) {
        return toggleConfirm(rating);
      } else return toggleConfirm();
    },

    updateSelfDiagnosis: (props, rating) => newInstance => {
      const { firebase, uid, showError, showSuccess, toggleConfirm } = props;
      if (!uid) {
        return showError('You must be logged in to create a project');
      }
      return firebase
        .push('ReviewsRating', {
          ...newInstance,
          starRating: props.enhancedStarRating,
          createdBy: uid,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        })
        .then(() => {
          showSuccess('done');
          toggleConfirm();
        })
        .catch(err => {
          console.error('Error:', err); // eslint-disable-line no-console
          showError(err.message || 'Could not add project');
          return Promise.reject(err);
        });
    }
  })
);

export default enhance(SelfDiagnosis);
