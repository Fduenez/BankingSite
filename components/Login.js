import Input from "./Input/Input";

const Login = () => {
    return (
        <div className="container w-1/5 mx-16 my-8 p-4 rounded-md bg-white flex-shrink-0">
            <h1 className="font-bold text-lg">Welcome</h1>
            <form className="flex flex-col justify-center content-center">
                <Input type="text" placeholder="Username"/>
                <Input type="password" placeholder="Password"/>
                <button type="submit" className="bg-blue-500 my-4 rounded-md text-white p-1">Sign in</button>
            </form>
        </div>
    );

}

export default Login;