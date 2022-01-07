import Login from "./Login";
import {useRouter} from "next/router";

const HeroLayer = () =>{
    const router = useRouter();
    const onOpenAccount = () => {
        router.push('/OpenAccount');
    };

    return (
        <div className="bg-blue-500 h-1/2 w-full flex flex-row-reverse place-content-between">
            <Login />
            <div className="mx-16 my-8">
                <h1 className="font-bold text-white text-3xl">New Duenez </h1>
                <h1 className="font-bold text-white text-3xl">Checking customers </h1>
                <h3 className="mt-8 font-bold text-white">Open a new Duenez Total Checking account and set up direct deposit</h3>
                <button type="button" className="my-4 p-2 bg-green-600 rounded-md text-white font-bold" onClick={() => onOpenAccount()}>Open an Account</button>
            </div>
        </div>
    );
}

export default HeroLayer;