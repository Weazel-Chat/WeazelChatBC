var firebaseConfig = {
  apiKey: "AIzaSyCeBBBdlQFzKcC7hX-IIih_mDITKlzsUvw",
  authDomain: "parlons-database.firebaseapp.com",
  databaseURL: "https://parlons-database-default-rtdb.firebaseio.com",
  projectId: "parlons-database",
  storageBucket: "parlons-database.appspot.com",
  messagingSenderId: "1093542039452",
  appId: "1:1093542039452:web:be08f8dab14a7f4c9f8259"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

username = localStorage.getItem("Username")
document.getElementById("welcome").innerHTML = "Welcome " + username + "."

function addRoom(){  
  var roomName = document.getElementById("inputRoomName").value; 
localStorage.setItem("Room Name", roomName) 
firebase.database().ref("/").child(roomName).update({
  purpose: "adding room"})

  window.location = "roompage.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
console.log("Room Names: " + Room_names)
row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>"
 //End Code
 document.getElementById("output").innerHTML += row 
});});}
getData();
 
function redirectToRoomName(name){
  console.log(name)
localStorage.setItem("Room Name", name);

  window.location = "roompage.html"
}
function logout(){
  localStorage.removeItem("Username")
  window.location = "login.html" 
}