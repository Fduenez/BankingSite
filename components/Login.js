const Login = () => {
    return (
        <div className="container w-1/5 mx-16 my-8 p-4 rounded-md bg-white">
            <form className="flex flex-col justify-center content-center">
                <input type="text" placeholder="Username" className="block my-4 mx-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-400 "/>
                <input type="password" placeholder="Password" className="block my-4 mx-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-400 "/>
                <button type="submit" className="bg-blue-500 my-4 mx-2 rounded-md text-white p-1">Sign in</button>
            </form>
        </div>
    );

}

export default Login;