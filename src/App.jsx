// import { useState } from 'react'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import appfirebase from './credenciales'
// import Login from './Login'
// import Home from './Home'
// import './App.css'

// const auth = getAuth(appfirebase)

// function App() {
//   const [usuario, setUsuario] = useState(null)

//   onAuthStateChanged(auth, (usuariofirebase) => {
//     if (usuariofirebase) {
//       setUsuario(usuariofirebase)
//     } else {
//       setUsuario(null)
//     }
//   })

//   return (
//     <>
//       <div>
//         {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
//       </div>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import './App.css';

const App = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Aquí se realizara una petición al servidor para verificar la sesión del usuario
    const checkAuthStatus = async () => {
      try {
        const response = await fetch('http://tu_servidor_php/check_auth.php', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // Incluir  cualquier información adicional necesaria, como tokens de autenticación
        });

        const data = await response.json();

        if (data.authenticated) {
          // El usuario está autenticado, actualiza el estado con la información del usuario
          setUsuario({ email: data.email });
        } else {
          // El usuario no está autenticado, establece el estado a null
          setUsuario(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkAuthStatus();
  }, []); // Este efecto se ejecutará solo una vez al montar el componente

  return (
    <>
      <div>
        {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
      </div>
    </>
  );
};

export default App;