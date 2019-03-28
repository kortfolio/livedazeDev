import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { NEW_SLEEPTIME_FORM_NAME } from 'constants/formNames'
//import { withStyles } from '@material-ui/core/styles'
//import styles from './GoalDate.styles'

import { connect } from 'react-redux'
import { LIST_PATH } from 'constants/paths'
import { withHandlers, withStateHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import theme from 'containers/Navbar/NavbarTheme';


export default compose(
  reduxForm({
    form: NEW_SLEEPTIME_FORM_NAME,
    onSubmitSuccess: (result, dispatch, props) => props.reset()
  }),

  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Map auth uid from state to props
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Create listeners based on current users UID
  firebaseConnect(({ params, uid }) => [
    {
      path: 'sleepTimes',
      queryParams: ['orderByChild=createdBy', `equalTo=${uid}`]
    }
  ]),
  // Map projects from state to props
  connect(({ firebase: { ordered } }) => ({
    sleepTimes: ordered.sleepTimes
  })),
  // Show loading spinner while projects and collabProjects are loading
  spinnerWhileLoading(['sleepTimes']),
  // Add props.router
  withRouter,
  // Add props.showError and props.showSuccess
  withNotifications,
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ initialDialogOpen = false }) => ({
      newDialogOpen: initialDialogOpen
    }),
 
  ),
  withHandlers({
    deleteSleepTime: props => sleepTime => {
      const { firebase, showError, showSuccess } = props
      return firebase
        .remove(`sleepTimes/${sleepTime.key}`)
        .then(() => 
        showSuccess('goal day deleted successfully'))
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not delete project')
          return Promise.reject(err)
        })
    },
    
  }),
  
  
 )
