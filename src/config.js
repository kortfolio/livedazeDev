/**
 * NOTE: This file is ignored from git tracking. In a CI environment it is
 * generated by firebase-ci based on config in .firebaserc (see .gitlab-ci.yaml).
 * This is done so that environment specific settings can be applied.
 */

export const env = 'local'

// Config for firebase
export const firebase = {

  apiKey: 'AIzaSyDa2w_9XaDAZfHne9MwzXJTtxly9Eryk1E',
  authDomain: 'livedaze-66d5f.firebaseapp.com',
  databaseURL: 'https://livedaze-66d5f.firebaseio.com',
  projectId:'livedaze-66d5f',
  storageBucket: "livedaze-66d5f.appspot.com"
  
}

// Config to override default reduxFirebase config in store/createStore
// which is not environment specific.
// For more details, visit http://react-redux-firebase.com/docs/api/enhancer.html
export const reduxFirebase = {
  enableLogging: false, // enable/disable Firebase Database Logging
}

export default {
  env,
  firebase,
  reduxFirebase
}
