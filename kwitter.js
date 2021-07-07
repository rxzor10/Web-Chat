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

function addUser()
{
user_name = document.getElementById ("user_name").value;
localStorage.setItem ("user_name", user_name);
window.location="kwitter_room.html";

}