import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBVVHB8O4ibVeWiOUibKLS5lWJYQa3yVqU",
	authDomain: "linkedin-clone-29b15.firebaseapp.com",
	projectId: "linkedin-clone-29b15",
	storageBucket: "linkedin-clone-29b15.appspot.com",
	messagingSenderId: "837575686522",
	appId: "1:837575686522:web:fe366c4321d31a124f7ec3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth };
