import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIy2JTvV37YHEF7VqpfGsNHAi7fkp99SQ",
  authDomain: "thread-app-database.firebaseapp.com",
  projectId: "thread-app-database",
  storageBucket: "thread-app-database.appspot.com",
  messagingSenderId: "31776630109",
  appId: "1:31776630109:web:cdae7b73751b94399f34b4",
  measurementId: "G-KBYZ16X4BJ"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app); // firebase storage 

// User Registration
function registerUser() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered successfully, update user profile with username
      const user = userCredential.user;
      user.updateProfile({ displayName: username });
      // You can redirect the user to the home page or profile page after registration
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle registration errors here
    });
}
function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User logged in successfully
      // You can redirect the user to the home page or profile page after login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle login errors here
    });
}
// Get the gear icon element
const gearIcon = document.querySelector('.bi-gear-fill');

// Get the settings window element
const settingsWindow = document.getElementById('settings-window');

// Add a click event listener to the gear icon
gearIcon.addEventListener('click', function () {
  // Toggle the visibility of the settings window
  if (settingsWindow.style.display === 'none') {
    settingsWindow.style.display = 'block';
  } else {
    settingsWindow.style.display = 'none';
  }
});
// themeChange()
function themeChange() {
  console.log("clci")
  let body = document.querySelector('body');
  let loginBox = document.getElementById('loginBox');
  let setting = document.querySelector('.setting');
  let sh5 = document.querySelector('.sh5');
  body.style.backgroundColor = "black";
  body.style.color = "white";
  loginBox.style.borderColor = "white";
  loginBox.style.background = "black";
  sh5.style.color = "black"
}
function themeDefault() {
  console.log("defaut")
  let body = document.querySelector('body');
  let loginBox = document.getElementById('loginBox');
  let setting = document.querySelector('.setting');
  let sh5 = document.querySelector('.sh5');
  body.style.backgroundColor = "white";
  body.style.color = "black";
  loginBox.style.borderColor = "black";
  loginBox.style.background = "white";
  sh5.style.color = "black"
}
const goToLogin = () => {
  window.location.href = "../index.html";
};