import firebase from  "firebase";


  //export default firebaseConfig;

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJT5s5Rs64Zu9aPs7v_04IjQT2aJB81e8",
    authDomain: "inconnect-b0ef1.firebaseapp.com",
    databaseURL: "https://inconnect-b0ef1.firebaseio.com",
    projectId: "inconnect-b0ef1",
    storageBucket: "inconnect-b0ef1.appspot.com",
    messagingSenderId: "933095448766",
    appId: "1:933095448766:web:a852e4d3e4a87d5f7e3eef",
    measurementId: "G-P2W5GYXC63"

  });
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export{db, auth, storage};