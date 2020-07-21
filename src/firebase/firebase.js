import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAO4kHIGQ3e41EXIl3b0BEpSL4DmjEgotY",
    authDomain: "careerportal-816f6.firebaseapp.com",
    databaseURL: "https://careerportal-816f6.firebaseio.com",
    projectId: "careerportal-816f6",
    storageBucket: "careerportal-816f6.appspot.com",
    messagingSenderId: "63078662989",
    appId: "1:63078662989:web:e15d0fef260d76d20eed04",
    measurementId: "G-X34JYCW142"
};

class Firebase {
  constructor() {
  	if (!firebase.apps.length) {
  		firebase.initializeApp(firebaseConfig);
	}
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {}).catch(function(error){
		console.log("Failed to set persistence: " + error.message)
	});
    this.auth = firebase.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  getUser = () => this.auth.currentUser;
}

export default Firebase;