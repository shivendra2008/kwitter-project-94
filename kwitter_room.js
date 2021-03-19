// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD1_5T0zPA6z1_2gQS-47Er2ciIifAyU-I",
    authDomain: "kwitter-a6ea7.firebaseapp.com",
    databaseURL: "https://kwitter-a6ea7-default-rtdb.firebaseio.com",
    projectId: "kwitter-a6ea7",
    storageBucket: "kwitter-a6ea7.appspot.com",
    messagingSenderId: "344150142195",
    appId: "1:344150142195:web:f186c9701a02b8e21b5b86"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
