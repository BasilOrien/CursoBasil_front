import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchLocalUser = createAsyncThunk('fetchLocalUser', async function () {
    const axiosResponse = await axios.get("/user/userdata", { withCredentials: true })
    const data = await axiosResponse.data
    return data
})


const initialState = {
    userdata: [],
}

export const userSlice = createSlice({
    name: "localUserData",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchLocalUser.fulfilled, function (state, { payload }) {
            state.userdata = payload
        })
    }
})

export default userSlice.reducer