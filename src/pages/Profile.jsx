import React from 'react'
import noProfileImg from '../storage/img/no_user.png'
import Styles from '../styles/Profile.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Profile = () => {
    const userStore = useSelector(store => store.user)
    const userdata = userStore?.userdata


    console.log(userdata)
    return (
        <div className={Styles.container}>
            <h1 className={Styles.mainTitle}>Mi perfil</h1>
            <div className={Styles.dataContainer}>
                <ul className={Styles.ul}>
                    <h3>Informacion del usuario</h3>
                    <li>
                        <h3>Nombre de usuario</h3>
                        <input disabled type='text' placeholder={userdata.username} />
                    </li>
                    <li>
                        <h3 style={{ color: userdata?.Userdatum?.verified === true ? "limegreen" : "red" }}>Estado de la cuenta</h3>
                        <input disabled type='text' placeholder={userdata?.Userdatum?.verified === true ? "Verificado" : "Sin verificar"} />
                    </li>
                    <li>
                        <h3>Direccion de correo</h3>
                        <input disabled type='text' placeholder={userdata.mail} />

                    </li>
                    {
                        userdata?.Userdatum?.verified === false ? <li>
                            <h3 style={{ color: "red" }}>Verificacion</h3>
                            <Link className={Styles.verifyBtn} to={"/verify"} style={{ color: "red" }}>Verifica tu cuenta</Link>
                        </li> : null
                    }
                    <li>
                        <h3>Nombre</h3>
                        <input disabled type='text' placeholder={userdata.firstName} />
                    </li>
                    <li>
                        <h3>Apellido</h3>
                        <input disabled type='text' placeholder={userdata.lastName} />
                    </li>
                </ul>
                <ul className={Styles.ul}>
                    <h3>Informacion de contacto</h3>
                    <li>
                        <h3>Ciudad</h3>
                        <input disabled type='text' placeholder={userdata.city || "Sin datos"} />
                    </li>
                    <li>
                        <h3>Pais</h3>
                        <input disabled type='text' placeholder={userdata.country || "Sin datos"} />
                    </li>
                    <li>
                        <h3>Numero de telefono</h3>
                        <input disabled type='text' placeholder={userdata.phone || "Sin datos"} />
                    </li>
                </ul>
                <ul className={Styles.ul_card}>
                    <h3 className={Styles.studentCardH3}>Tarjeta de alumno</h3>
                    <li className={Styles.pictureContainer}>
                        <img src={noProfileImg} alt="user_image" className={Styles.profilePicture} />
                    </li>
                    <li>
                        <h3>Nombre de usuario</h3>
                        <input disabled type='text' placeholder={userdata.username || "Sin datos"} />
                    </li>
                    <li>
                        <h3>Modulo</h3>
                        <input disabled type='text' placeholder={userdata.module || "Sin datos"} />
                    </li>
                    <li className={Styles.cuota}>
                        <h3 style={{ color: userdata?.Userdatum?.payment[0].status.includes("pending") ? "red" : "limegreen" }}>Cuota</h3>
                        <input disabled type='text' placeholder={userdata?.Userdatum?.payment[0].status.includes("pending") ? "Adeuda" : "Al dia"} />
                    </li>
                    <li className={Styles.fechapago}>
                        <h3>Proximo pago</h3>
                        <input disabled type='text' placeholder={userdata?.Userdatum?.payment[0].nextPayDate ? userdata?.Userdatum?.payment[0].nextPayDate : "Sin datos"} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile