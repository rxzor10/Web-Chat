
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

var firebaseConfig = {
      apiKey: "AIzaSyDqC_TTSc2NuoSQsMdKQwbaiXGKXwcwkhM",
      authDomain: "kwitter-app-9f58b.firebaseapp.com",
      databaseURL: "https://kwitter-app-9f58b-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-9f58b",
      storageBucket: "kwitter-app-9f58b.appspot.com",
      messagingSenderId: "785625003389",
      appId: "1:785625003389:web:7f743f2b2c47a5423b8814",
      measurementId: "G-YCQ5MBX7B8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log ("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName (this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
     
});});}
getData();

function addRoom()
{
      room_name = document.getElementById ("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"})
      
localStorage.setItem ("room_name", room_name);
      
window.location="kwitter_page.html";

}
function redirectToRoomName(name)
{
console.log(name);

localStorage.setItem("room_name", name);

window.location = "kwitter_page.html";

};
function logout () 
{
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
   window.location = "index.html" ;
}
function addUser()
  {
user_name = document.getElementById("user_name").value

firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});

  }