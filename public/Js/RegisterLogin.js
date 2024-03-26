import { 
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    provider,
    GoogleAuthProvider,
    signInWithPopup 
} from "./connect.js";


//Crear usuario

const CreateUser = document.getElementById('CreateUser')

CreateUser.addEventListener("click", (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    //Expresión regular
    function validarCorreo(texto) {
      var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      return regex.test(texto)
    }

    if (!validarCorreo(email)) {
      Swal.fire({
        title: 'Error al registrarse',
        text: '¡Debe ingresar un correo electrónico válido!',
        icon: 'error',
        confirmButtonText: 'Ok',
        timer: 2000,
      }) 
    }
    else if (password.length < 6 || password == 123456 || password == 654321) {
      Swal.fire({
        title: 'Error al registrarse',
        text: '¡Ingrese una contraseña válida!',
        icon: 'error',
        confirmButtonText: 'Ok',
        timer: 2000,
      }) 
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      Swal.fire({
        title: 'Cuenta creada',
        text: '¡Ya puedes iniciar sesión!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
        Swal.fire({
          title: 'Error al registrarse',
          text: '¡El correo ingresado ya se encuentra registrado!',
          icon: 'error',
          confirmButtonText: 'Ok',
          timer: 2000,
        }) 
    });
    } 
})


//Iniciar sesión

const LoginUser = document.getElementById('LoginUser')

LoginUser.addEventListener("click", (e) => {
    e.preventDefault()

    const emailLogin = document.getElementById('emailLogin').value
    const passwordLogin = document.getElementById('passwordLogin').value

    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
    .then((userCredential) => {
    const user = userCredential.user;

    Swal.fire({
      title: 'Bienvenido',
      text: '¡Tu portal web te espera!',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    window.addEventListener('click', (e) => {

        window.location.href = '/inicio'

    })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Error al iniciar sesión.')
  });

})


//Acceder con Google

const LoginGoogle = document.getElementById('LoginGoogle')

LoginGoogle.addEventListener('click', (e) => {
    e.preventDefault()

    signInWithPopup(auth, provider)
  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const UserCurrent = auth.currentUser;

    if(user != null) {
      const displayName = user.displayName
      Swal.fire({
        title: 'Bienvenido '+ displayName,
        text: '¡Tu portal web te espera!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      window.addEventListener('click', (e) => {
  
          window.location.href = '/inicio'
  
      })
    }


  }).catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
    alert('Error al iniciar sesión con Google.')
  });
})


