import /*React,*/ { useState } from "react";
//import Imagen from "./icon_2.svg";
import ImagenProfile from "./icon.svg";
// import appfirebase from "./credenciales";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// // const auth = getAuth(appfirebase);

const Login = () => {
const [register, setRegister] = useState(false);

//   const functAutentication = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     if (register) {
//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//       } catch (error) {
//         alert("Verify your password, it needs to be more than 8 characters");
//       }
//     } else {
//       try {
//         await createUserWithEmailAndPassword(auth, email, password);
//       } catch (error) {
//         alert("Verify your password or email");
//       }
//     }
//   };

const functAutentication = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  if (register) {
    try {
      // Realiza una petición al servidor PHP para iniciar sesión
      const response = await fetch('http://tu_servidor_php/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // El inicio de sesión fue exitoso
        // Puedes realizar acciones adicionales aquí
      } else {
        alert("Verify your password, it needs to be more than 8 characters");
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      // Realiza una petición al servidor PHP para registrar un nuevo usuario
      const response = await fetch('http://tu_servidor_php/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // El registro fue exitoso
        // Puedes realizar acciones adicionales aquí
      } else {
        alert("Verify your password or email");
      }
    } catch (error) {
      console.error(error);
    }
  }
};


  return (
    <div className="d-inline-flex">
      <div className="row">
        <div className="col-md-4">
          <div className="Padre">
            <div className="card card-body shadow-lg">
              <img src={ImagenProfile} alt="" className="estilo-profile" />
              <form onSubmit={functAutentication}>
                <input type="text" placeholder="Ingresar Email" className="TextBox" id="email" />
                <br></br>
                <input type="password" placeholder="Password" className="TextBox" id="password" />
                <br></br>
                <button className="btnform">{register ? "Register" : "Login"}</button>
              </form>
              <h4 className="text">{register ? "If you have an account" : "Don't have an account?"}<button onClick={() => setRegister(!register)} className="btnform1">{register ? "Login" : "Register"}</button></h4>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <img/>
        </div>
      </div>
    </div>
  );
};

export default Login;