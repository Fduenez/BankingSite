import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store/auth";
import {useRouter} from "next/router";

const Navbar = () => {
    const isAuth = useSelector(state=> state.auth.token);
    const dispatch = useDispatch()
    const router = useRouter()
    const onLogOut = () => {
        if(typeof window !== "undefined"){
            localStorage.removeItem("token")
        }
        dispatch(authActions.logout());
        router.push("/index");
    }

    return (
        <div className="flex flex-row justify-between py-4 border-b-2 w-full bg-white">
            {/*left side*/}
            <nav>
                <ul className="list-none">
                    <li className="inline mx-9 my-2"><Link href="/"><a className="font-bold text-lg">Duenez Bank</a></Link></li>
                    <li className="inline m-2"><Link href="/checks&savings"><a>Checks & Savings</a></Link></li>
                    <li className="inline m-2"><Link href="/"><a>Credit</a></Link></li>
                    <li className="inline m-2"><Link href="/"><a>Home Loans</a></Link></li>
                    <li className="inline m-2"><Link href="/"><a>Auto</a></Link></li>
                    <li className="inline m-2"><Link href="/aboutUs"><a>About Us</a></Link></li>
                    {isAuth ? <li className="inline m-2"><Link href="/Dashboard"><a>Dashboard</a></Link></li> : null}
                </ul>
            </nav>
            <div>
                {isAuth ? <button type="button" onClick={() => dispatch(authActions.logout())} className="rounded-md bg-blue-500 p-2 mx-4 text-white">Log Out</button> : null}
            </div>
            {/*right side*/}
        </div>

    );

};
export default Navbar;