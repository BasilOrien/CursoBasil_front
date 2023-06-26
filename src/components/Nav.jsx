import React from 'react'
import { logout } from '../utils/axios/axios.js'
import { Link } from 'react-router-dom'
import Styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={Styles.nav}>
            <ul>
                <li className={Styles.linkContainer}><Link to={"/"} className={Styles.link}>Inicio</Link></li>
                <li className={Styles.linkContainer}><Link to={"/profile"} className={Styles.link}>Perfil</Link></li>
                                <li className={Styles.linkContainer}>
                    <form onSubmit={(e) => logout()}>
                        <input className={Styles.link} type="submit" value="Cerrar sesion" />
                    </form>
                </li>

            </ul>
        </nav>
    )
}

export default Nav