import { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import appfirebase from './credenciales'
import Login from './Login'
import Home from './Home'
import './App.css'

const auth = getAuth(appfirebase)

function App() {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuariofirebase) => {
    if (usuariofirebase) {
      setUsuario(usuariofirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
    <>
      <div>
        {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
      </div>
    </>
  )
}

export default App
