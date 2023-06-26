import axios from "axios";

export async function register(firstName, lastName, username, mail, password) {
    const axiosPost = await axios.post(`${process.env.REACT_APP_API_URL}/user/register`, {
        firstName,
        lastName,
        username,
        mail,
        password
    })
    const data = await axiosPost.data
    return data
}

export async function login(username, password) {
    const axiosLogin = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
        username: username,
        password: password
    }, {
        withCredentials: true
    })
    const data = await axiosLogin.data
    return data
}

export async function logout() {
    localStorage.removeItem("storage_type")

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/logout`, {}, { withCredentials: true })
    const data = await response.data
    return data
}

export async function checkSession() {
    const axiosCheckSession = await axios.get(`${process.env.REACT_APP_API_URL}/check_session`, { withCredentials: true })
    const data = await axiosCheckSession.data;
    return data
}

export async function sendVerifyCode() {
    const axiosGet = await axios.get(`${process.env.REACT_APP_API_URL}/user/setverify`, { withCredentials: true })
    const data = await axiosGet.data
    return data
}

export async function verifyCode(code) {
    const axiosPost = await axios.post(`${process.env.REACT_APP_API_URL}/user/verifyCode`, { verifyCode: code }, { withCredentials: true })
    const data = axiosPost.data
    return data
}