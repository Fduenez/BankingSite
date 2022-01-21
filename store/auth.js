import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {error} from "next/dist/build/output/log";
import login from "../components/Login";

const initialState = {
    token: typeof window !== "undefined"? localStorage.getItem("token") : "",
    isLoggedIn: false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ""
}

export const signUpAuth = createAsyncThunk("auth/signup",
    async ({firstName, LastName, username, password, birthdate, ssn, savings, college, retirement }, thunkAPI) => {
        const sendRequest = async () => {
            const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA964cOTx3NVSVL3zccV-Hq03l7d7veZnQ",
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: username + "@gmail.com",
                        password: password,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            if(!response.ok){
                thunkAPI.rejectWithValue("Failed to sign up");
            }
            const data = await response.json();
            return data;
        }
        try {
            const dataRetrieved = await sendRequest();
            console.log(dataRetrieved)
            return { ...dataRetrieved}

        }
        catch(e){
            console.log("Error", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const signInAuth = createAsyncThunk("auth/signin",
    async ({ username, password}, thunkAPI) => {
        const sendRequest = async () => {
            const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA964cOTx3NVSVL3zccV-Hq03l7d7veZnQ",
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: username + "@gmail.com",
                        password: password,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            if(!response.ok){
                thunkAPI.rejectWithValue("Failed to sign up");
            }
            const data = await response.json();
            return data;
        }
        try {
            const dataRetrieved = await sendRequest();
            console.log(dataRetrieved)
            return { ...dataRetrieved}

        }
        catch(e){
            console.log("Error", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const authSlice = createSlice(
    {
        name: 'auth',
        initialState: initialState,
        reducers: {
            login(state, action){
                state.token = action.token;
                state.isLoggedIn = !!state.token;
            },
            logout(state){
                state.token = null;
                state.isLoggedIn = !!state.token;
            },
            clearState(state){
                state.isFetching = false,
                state.isSuccess = false,
                state.isError = false,
                state.errorMessage = ""
            }

        },
        extraReducers: {
            [signUpAuth.fulfilled]: (state, { payload }) => {
                state.isFetching = false;
                state.isSuccess = true;
                state.token = payload.idToken
                localStorage.setItem("token", state.token);
                console.log(localStorage.getItem("token"))
                state.isLoggedIn = true;
            },
            [signUpAuth.pending]: (state) => {
                state.isFetching = true;
            },
            [signUpAuth.rejected]: (state, { payload }) => {
                state.isFetching = false;
                state.isError = true;
                state.errorMessage = payload.message
            },
            [signInAuth.fulfilled]: (state, { payload }) => {
                state.isFetching = false;
                state.isSuccess = true;
                state.token = payload.idToken
                localStorage.setItem("token", state.token);
                console.log(localStorage.getItem("token"))
                state.isLoggedIn = true;
            },
            [signInAuth.pending]: (state) => {
                state.isFetching = true;
            },
            [signInAuth.rejected]: (state, { payload }) => {
                state.isFetching = false;
                state.isError = true;
                state.errorMessage = payload.message
            }
        }
    }
);


export const authActions = authSlice.actions;
export default authSlice.reducer;