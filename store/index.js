import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterSlice from "./counter";



export default configureStore({
    reducer: {counter: counterSlice}
})
export const CounterActions = counterSlice.actions;