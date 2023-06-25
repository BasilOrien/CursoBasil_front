import React from 'react'
import { logout } from '../utils/axios/axios.js'
const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <form onSubmit={(e) => logout()}>
                        <input type="submit" value="Cerrar sesion" />
                    </form>
                </li>
            </ul>
        </nav>
    )
}

export default Nav