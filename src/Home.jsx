// import React from 'react'
// import appfirebase from './credenciales'
// import { getAuth, signOut } from 'firebase/auth'
// const auth = getAuth(appfirebase)

// const Home = () => {
//     return(
//         <div>
//             <h2 className='text-center'> Welcome {emailuser}<button className='btn btn-primary' onClick={()=>signOut(auth)}> Logout </button></h2>
//         </div>
//     )
// }

// export default Home;

import { useState, useEffect } from 'react';

const Home = () => {
  const [emailuser, setEmailUser] = useState('');

  useEffect(() => {
    // Realizar una petición al servidor PHP para obtener la información del usuario
    // Puedes usar fetch

    const fetchData = async () => {
      try {
        const response = await fetch('http://tu_servidor_php/getUserData.php', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          // Puedes incluir algún tipo de token o identificador de sesión si es necesario
        });

        const data = await response.json();

        if (data.success) {
          // La petición fue exitosa, actualiza el estado con la información del usuario
          setEmailUser(data.email);
        } else {
          // Maneja el caso en el que no se pueda obtener la información del usuario
          console.error('Unable to fetch user data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  const handleLogout = async () => {
    // implementar lógica de cierre de sesión aquí
    try {
      const response = await fetch('http://tu_servidor_php/logout.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Puedes incluir algún tipo de token o identificador de sesión si es necesario
      });

      const data = await response.json();

      if (data.success) {
        // El cierre de sesión fue exitoso, puedes redirigir al usuario a la página de inicio de sesión, por ejemplo
        window.location.href = '/login';
      } else {
        // Maneja el caso en el que no se pueda cerrar la sesión
        console.error('Unable to log out');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className='text-center'> Welcome {emailuser}<button className='btn btn-primary' onClick={handleLogout}> Logout </button></h2>
    </div>
  );
};

export default Home;