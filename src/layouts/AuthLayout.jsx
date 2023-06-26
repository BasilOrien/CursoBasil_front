import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Forms from '../components/Forms'
import { checkSession } from '../utils/axios/axios'
import Loading from '../components/Loading'
import Styles from '../styles/AuthLayout.module.css'
const AuthLayout = () => {
    const location = useLocation().pathname
    const [selectedForm, setSelectedForm] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(function () {
        checkSession().then(response => {
            if (response === true) {
                return window.location.replace("/")
            } else setLoading(false)
        })
        if (!location.includes("register") && !location.includes("login")) {
            return window.location.replace("/auth/login")
        }

        if (location.includes("login")) {
            setSelectedForm(1)
        }
        if (location.includes("register")) {
            setSelectedForm(2)
        }
    }, [selectedForm, location])

    return loading ? <Loading /> : <div className={Styles.container}>
        <div className={Styles.logocontainer}>
            <h1>BasilOrien W.D</h1>
            <h3>Desarrollo Web</h3>
            <p>Imagina, nosotros hacemos real.</p>
        </div>
        <Forms selectedForm={selectedForm} />
    </div>
}

export default AuthLayout