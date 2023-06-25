import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../utils/axios/axios'

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [checkPassword, setCheckPassword] = useState("")

  async function onSubmitHandler(e) {
    e.preventDefault()
    if (!firstName || !lastName || !username || !mail || !password || !checkPassword) {
      return alert("Falta completar campos")
    }

    if (checkPassword !== password) return alert("Las contraseñas no coinciden.")

    register(
      String(firstName),
      String(lastName),
      String(username),
      String(mail),
      String(password)
    ).then(response => {
      if (response === true) {
        alert("El usuario ha sido registrado con exito")
        return window.location.replace("/auth/login")
      } else {
        return alert(response.message)
      }
    })


  }

  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <h2>Registrate</h2>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          type="text"
          name="firstName" id="firstName"
          placeholder='Nombre'
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          type="text"
          name="lastName"
          id="lastName"
          placeholder='Apellido'
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          name="username"
          id="username"
          placeholder='Nombre de usuario'
        />
        <input
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          type="email"
          name="mail"
          id="mail"
          placeholder='Correo'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          id="password"
          placeholder='Contraseña'
        />
        <input
          onChange={(e) => setCheckPassword(e.target.value)}
          value={checkPassword}
          type="password"
          name="passwordCheck"
          id="passwordCheck"
          placeholder='Confirma tu contraseña'
        />
        <input
          type="submit" value="Registrarme"
        />
      </form>
      <h3>Ya tenes una cuenta? {<Link to={"/auth/login"}>Iniciá sesión</Link>}</h3>
    </div>
  )
}

export default Register