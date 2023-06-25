import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Forms from '../components/Forms'
import { checkSession } from '../utils/axios/axios'
import Loading from '../components/Loading'

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
    }, [selectedForm, location])
    
    return loading ? <Loading /> : <div>
        <Forms selectedForm={selectedForm} />
    </div>
}

export default AuthLayout