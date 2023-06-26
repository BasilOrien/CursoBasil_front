import React from 'react'
import Styles from '../styles/Home.module.css'
import ModuleHolder from '../components/HomeComponents/Module_Holder'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
    const userStore = useSelector(store => store.user)
    const userdata = userStore?.userdata
    return !userdata?.Userdatum?.verified ? <div style={{ width: "100%", height: "100%", display: 'flex', justifyContent: "center" }}>

        <h3 style={{ marginTop: "2em" }}>Debes <Link to={"/profile"}>verificar tu cuenta</Link> para continuar.</h3>
    </div> : (
        <div className={Styles.container}>
            <ModuleHolder />
        </div>
    )
}

export default Home