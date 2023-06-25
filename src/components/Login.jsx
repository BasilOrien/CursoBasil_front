import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../utils/axios/axios'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function selectStorage(e) {
        if (e.target.checked) {
            return localStorage.setItem("storage_type", "local")
        } else {
            return localStorage.setItem("storage_type", "session")
        }
    }

    async function onSubmitHandler(e) {
        e.preventDefault()
        if (!username || !password) {
            return alert("Debes completar todos los campos")
        }

        login(String(username), String(password)).then(response => {
            if (response === true) {
                return window.location.replace("/")
            }
        })
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <h2>Inicia sesión</h2>
                <input onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    name="username"
                    id="username_field"
                    placeholder='Ingresá tu usuario'
                />
                <input onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    id="password_field"
                    placeholder='Ingresá tu contraseña'
                />
                <input type="submit" value="Iniciar sesión" />
                <label htmlFor="storage_type">Mantener la sesión iniciada?</label>
                <input onChange={(e) => selectStorage(e)} type="checkbox" name="storage_type" id="storage_type" />
            </form>
            <h3>¿No tenes una cuenta? {<Link to={"/auth/register"}>Registrate!</Link>}</h3>
        </div>
    )
}

export default Login