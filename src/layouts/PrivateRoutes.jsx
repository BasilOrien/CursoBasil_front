import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { checkSession, logout } from '../utils/axios/axios'
import Loading from '../components/Loading'
import Nav from '../components/Nav'


const PrivateRoutes = () => {
  const [loading, setLoading] = useState(true)
  useEffect(function () {
    if (localStorage.getItem("storage_type") === "session") {
      window.addEventListener("beforeunload", function (e) {
        logout()
      })
    }


    checkSession().then(response => {
      if (response === true) {
        return setLoading(false)
      }
      return window.location.replace("/auth/login")
    })
  })
  return loading ? <Loading /> : <div>
    <Nav />

    <Outlet />

  </div>
}

export default PrivateRoutes