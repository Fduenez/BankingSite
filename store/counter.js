import {createSlice} from "@reduxjs/toolkit";


const initialState = {counter: 0, showCounter: true};
const counterSlice = createSlice({
        name: 'counter',
        initialState: initialState,
        reducers: {
            //methods
            increment(state){
                state.counter++;
            },
            decrement(){
                state.counter--;
            }
        }
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;