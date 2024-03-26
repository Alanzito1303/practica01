import { 
    app,
    auth,
    onAuthStateChanged,
    signOut 
} from "./connect.js";

//Estado de sesión

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const nameUser = user.displayName
      const photoURL = user.photoURL
      //Saludar usuario

      const saludo = document.getElementById('saludo')
      
      const TextGreetings = document.createTextNode(`¡Bienvenido ${nameUser}!`)

      saludo.appendChild(TextGreetings)


      //Foto de perfil

      const Profile = document.getElementById('Profile')
      Profile.src = photoURL

    } else {
        window.location.href = '/'
    }
  });

//Cerrar sesión

const signOutUser = document.getElementById('signOutUser')

signOutUser.addEventListener('click', (e) => {
    e.preventDefault()

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Tendrás que volver a iniciar sesión.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth).then(() => {
          window.location.href = '/'
        }).catch((error) => {
          alert('Error al cerrar sesión.')
        });
      }
    })

})


