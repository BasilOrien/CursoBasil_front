import React from 'react'
import Login from './Login'
import Register from './Register'

const Forms = ({ selectedForm }) => {
    if (selectedForm === 1) return < Login/>
    if (selectedForm === 2) return < Register/>

}

export default Forms