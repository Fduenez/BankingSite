import Input from "./Input/Input";
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {authActions, signInAuth} from "../store/auth";

const Login = () => {
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const dispatch = useDispatch();

    const onLoginHandler = (e) => {
        e.preventDefault();
        console.log(usernameInputRef.current.value);
        console.log(passwordInputRef.current.value);
        let username = usernameInputRef.current.value;
        let password = passwordInputRef.current.value
        dispatch(signInAuth({username, password}))
    }
    return (
        <div className="container w-1/5 mx-16 my-8 p-4 rounded-md bg-white flex-shrink-0">
            <h1 className="font-bold text-lg">Welcome</h1>
            <form className="flex flex-col justify-center content-center">
                <Input type="text" placeholder="Username" ref={usernameInputRef}/>
                <Input type="password" placeholder="Password" ref={passwordInputRef}/>
                <button type="submit" className="bg-blue-500 my-4 rounded-md text-white p-1" onClick={(e) => onLoginHandler(e)}>Sign in</button>
            </form>
        </div>
    );

}

export default Login;