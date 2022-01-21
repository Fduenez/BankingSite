import '../styles/globals.css'
import {Provider, useDispatch} from "react-redux";
import store from '../store/index';
import {useEffect} from "react";
import {authActions} from "../store/auth";


function MyApp({ Component, pageProps }) {

  return <Provider store={store}> <Component {...pageProps}/></Provider>
}

export default MyApp
