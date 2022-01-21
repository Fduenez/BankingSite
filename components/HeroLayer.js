import Login from "./Login";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

const HeroLayer = () =>{
    const router = useRouter();
    const isAuth = useSelector(state=> state.auth.token);
    const onOpenAccount = () => {
        router.push('/OpenAccount');
    };

    return (
        <div className="bg-blue-500 h-1/3 w-full flex place-content-between items-center">
            <div className="mx-16 my-8">
                {!isAuth ? <h1 className="font-bold text-white text-3xl">New Duenez </h1>: <h1 className="font-bold text-white text-3xl">Welcome Duenez </h1>}
                <h1 className="font-bold text-white text-3xl">Checking customers </h1>
                {!isAuth ? <h3 className="mt-8 font-bold text-white">Open a new Duenez Total Checking account and set up direct deposit</h3> : <h3 className="mt-8 font-bold text-white"> thank you for signing up! we are proud to have you here </h3>}
                {!isAuth ? <button type="button" className="my-4 p-2 bg-green-600 rounded-md text-white font-bold" onClick={() => onOpenAccount()}>Open an Account</button> : null}
            </div>
            {!isAuth ? <Login/> : null}
        </div>
    );
}

export default HeroLayer;