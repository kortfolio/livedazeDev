import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  var config = {
      apiKey: "AIzaSyDa2w_9XaDAZfHne9MwzXJTtxly9Eryk1E",
      authDomain: "livedaze-66d5f.firebaseapp.com",
      databaseURL: "https://livedaze-66d5f.firebaseio.com",
      projectId: "livedaze-66d5f",
      storageBucket: "livedaze-66d5f.appspot.com",
      messagingSenderId: "744373223996"
  };
firebase.initializeApp(config); 

export default firebase
