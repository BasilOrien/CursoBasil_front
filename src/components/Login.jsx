import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../utils/axios/axios'
import Styles from '../styles/AuthForms.module.css'

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

        login(String(username), String(password)).then(async function (response) {
            if (response === true) {
              
                return window.location.replace("/")
            } else {
                return alert("Usuario o contraseña incorrectos.")
            }
        })
    }

    return (
        <div className={Styles.container}>
            <h2 className={Styles.formHTitle}>Bienvenido de Nuevo!</h2>
            <form className={Styles.form} onSubmit={(e) => onSubmitHandler(e)}>
                <h2>Inicia sesión</h2>
                <input className={Styles.inputText} onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    name="username"
                    id="username_field"
                    placeholder='Ingresá tu usuario'
                />
                <input className={Styles.inputText} onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    id="password_field"
                    placeholder='Ingresá tu contraseña'
                />
                <input
                    className={Styles.submit}

                    type="submit" value="Iniciar sesión" />
                <div className={Styles.checkBox_container}>
                    <label htmlFor="storage_type">Mantener la sesión iniciada?</label>
                    <input onChange={(e) => selectStorage(e)} type="checkbox" name="storage_type" id="storage_type" />

                </div>
            </form>
            <h3 className={Styles.changeform}>¿No tenes una cuenta? {<Link to={"/auth/register"}>Registrate!</Link>}</h3>
        </div>
    )
}

export default Login