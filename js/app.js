
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



function registrar(){
    console.log('clic');
}
function registrar() {
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;
 
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
        .then((user) => {
            console.log('Usuario registrado!');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;           
            console.log(errorMessage);
        });
}

function ingresar() {
    var email = document.getElementById('email2').value;
    var contrasena = document.getElementById('contrasena2').value;
 
    firebase.auth().signInWithEmailAndPassword(email, contrasena)
        .then((user) => {
            // Signed in
            // ...
            console.log('sesión iniciada');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}


