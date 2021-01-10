//Firebase Links
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
  firebase.initializeApp(firebaseConfig)
//---------------------------------------------
var username = localStorage.getItem("Username")
var roomname = localStorage.getItem("Room Name")
document.getElementById("displayRoomName").innerHTML = "You are in Room Name / Number: " + roomname
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
{ firebase_message_id = childKey; 
  message_data = childData; 
  //Start code
  console.log(firebase_message_id)
  console.log(message_data)
  name = message_data['Name']
  message = message_data['message']
  likes = message_data['likes']
  name_with_tag = "<h4>" + name + "<img src = 'tick.png' class = 'user_tick'> </h4>"
  message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>"
  like_with_tag = "<button id = '" + firebase_message_id + "' class = 'btn btn-inverse' value = ' " + likes + "' onclick = 'updateLike(this.id)'>"
  span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Likes: " + likes + "</span> </button> <hr>"
  row = name_with_tag + message_with_tag + like_with_tag + span_with_tag;
  document.getElementById("output").innerHTML +=row 
  //End code 
} }); }); } 
getData();

function updateLike(firebase_message_id){
  console.log("Clicked on like button. Message ID = " + firebase_message_id)
  button_id = firebase_message_id
var newLikes = document.getElementById(firebase_message_id).value
updatedLikes = Number(newLikes) + 1     
console.log(updatedLikes)
firebase.database().ref(roomname).child(firebase_message_id).update({
  likes:updatedLikes
})
}
function sendMsg(){
    var msg = document.getElementById("msg").value
    firebase.database().ref(roomname).push({
          Name:username,
          Roomname:roomname,
          message:msg,
          likes:0
    })
    document.getElementById("msg").value = ""
    }
    function logout(){
    localStorage.removeItem("Room Name")
    localStorage.removeItem("Username")
    window.location = "login.html"
}