import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit'
import authSlice from "./auth"
import counterSlice from './counter'
import userAccountSlice from "./userAccount";

export default configureStore({
    reducer: {
        auth: authSlice,
        counter: counterSlice,
        userAccount: userAccountSlice,
    }
})

