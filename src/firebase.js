import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAvroDWHTUQ4r5NssmzW8AbVecJwa0emYU",
    authDomain: "yoga-poses-aed7f.firebaseapp.com",
    databaseURL: "https://yoga-poses-aed7f.firebaseio.com",
    projectId: "yoga-poses-aed7f",
    storageBucket: "yoga-poses-aed7f.appspot.com",
    messagingSenderId: "215149571364"
};

firebase.initializeApp(config);

export default firebase;