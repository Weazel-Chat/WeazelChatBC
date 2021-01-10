//Firebase Links
var firebaseConfig = {
    apiKey: "AIzaSyCeBBBdlQFzKcC7hX-IIih_mDITKlzsUvw",
    authDomain: "parlons-database.firebaseapp.com",
    projectId: "parlons-database",
    storageBucket: "parlons-database.appspot.com",
    messagingSenderId: "1093542039452",
    appId: "1:1093542039452:web:be08f8dab14a7f4c9f8259"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//------------------------------------

//Login Function
function login(){
    var username = document.getElementById("inputUsername").value 
    localStorage.setItem("Username", username)
    window.location = "homepage.html"
    
}



