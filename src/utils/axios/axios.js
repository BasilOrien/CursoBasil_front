import axios from "axios";

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

