import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { sendVerifyCode, verifyCode } from '../utils/axios/axios'

const Verify = () => {
    const userStore = useSelector(store => store.user)
    const userdata = userStore.userdata
    const verified = userdata?.Userdatum?.verified
    const [code, setCode] = useState("")
    const [sent, setSent] = useState(false)
    // const [done, setDone] = useState(false)

    useEffect(function () {

        if (verified === false && !sent) {
            sendVerifyCode().then(response => {
                if (response.includes("enviado")) {
                    setSent(true)
                }
            })
        }
    })


    function onVerifyHandler(e) {
        e.preventDefault()
        if (code.length !== 6) return alert("El codigo debe tener 6 digitos")
        verifyCode(Number(code)).then(response => {
            alert(response.message)
            if (response.message.includes("exito")) {
                window.location.replace("/profile")
            }
        })

    }

    return verified ? <Navigate to={"/profile"} /> : (
        <div>
            {
                sent
                    ?
                    <form onSubmit={(e) => onVerifyHandler(e)}>
                        <h3>Ingresa tu codigo de verificacion</h3>
                        <  input onChange={(e) => setCode(e.target.value)} value={code} type="number" placeholder='Ingresa tu codigo de 6 digitos' />
                        <input type="submit" value="Verificarme" />
                        <h5>Recuerda que el codigo sirve unicamente mientras estas en esta página</h5>
                    </form>
                    :
                    <h3>Enviando codigo de verificacion</h3>
            }
        </div>
    )
}

export default Verify