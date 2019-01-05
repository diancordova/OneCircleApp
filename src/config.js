import Firebase from 'firebase';  
let config = {  
  apiKey: "AIzaSyAOw_TBIlxp1BVLt1XqYCYUs272Fak14jA",
  authDomain: "onecircle-d06b2.firebaseapp.com",
  databaseURL: "https://onecircle-d06b2.firebaseio.com",
  projectId: "onecircle-d06b2",
  storageBucket: "onecircle-d06b2.appspot.com",
  messagingSenderId: "419678085687",
  };
let app = Firebase.initializeApp(config);  
export const db = app.database();  