import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import create from "prompt-sync";
import { build } from "vite";
import { axiosInstance } from "../../lib/axios";
import { connect } from "socket.io-client";
import { connectSocket } from "../../lib/socket";

export const getUser = createAsyncThunk("user/me", async(_, thunkAPI)=> {
    try {
        const res = await axiosInstance.get("/user/me");
        connectSocket(res.data.user);
        return res.data.user;
    } catch (error) {
        console.log("Error fetching user:", error);
        return thunkAPI.rejectWithValue(error.response?.data || "Failed to fetch user");
    }
});

const authSlice = createSlice({
    name : "auth",
    initialState: {
        authUser: null,
        isSigningUp:false,
        isLoggingIn:false,
        isUpdatingProfile:false,
        isCheckingAuth: true,
        onlineUsers: [],
    },
    reducers:{
        setOnlineUsers(state, action){
            state.onlineUsers = action.payload;
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(getUser.fulfilled, (state,action)=>{
            state.authUser = action.payload;
            state.isCheckingAuth = false;
        })
        .addCase(getUser.rejected, (state,action)=>{
            state.authUser = null;
            state.isCheckingAuth = false;
        });
    },
});

export const {setOnlineUsers} = authSlice.actions;
export default authSlice.reducer;