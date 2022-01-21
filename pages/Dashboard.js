import Navbar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counter";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Dashboard = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter)
    const accounts = useSelector(state => state.userAccount.accounts)
    const recentTransactions = useSelector(state => state.userAccount.recentTransactions)
    const name = useSelector(state => state.userAccount.name)
    const isAuth = useSelector(state=> state.auth.token);
    const router = useRouter();
    useEffect(()=> {
        if(!isAuth){
            router.push('/')
        }
    }, [])

    return (
        <div className="p-0 m-0 box-border w-screen h-screen bg-blue-500">
            <Navbar/>
            <div className="m-8 grid grid-cols-5 gap-3">
                <div className="order-1 col-start-1 col-span-3 bg-white rounded-md p-4">
                    <h2 className="border-b-2 border-b-blue-200 text-2xl font-bold text-blue-400">My Account</h2>
                    {
                        accounts.map((account) => {
                            return  (<div className="shadow-md p-4 m-2 rounded-md flex place-content-between" key={account.nameOfAccount}>
                                <a className="text-lg">{account.nameOfAccount}</a>
                                <p className="text-lg">{account.balance}</p>
                            </div>)
                        })
                    }
                </div>
                <div className="order-2 col-start-4 col-span-5 border-2 bg-white rounded-md p-4">
                    {counter}
                    <button type="button" onClick={() => dispatch(counterActions.increment())}>click</button>
                </div>
                <div className="order-3 col-start-1 col-span-3 bg-white rounded-md p-4">
                    <h2 className="border-b-2 border-b-blue-200 text-2xl font-bold text-blue-400">Recent Transactions</h2>
                    {
                        recentTransactions.map((transaction) => {
                            return(<div className="shadow-md p-4 m-2 flex place-content-between items-center rounded-md" key={transaction.id}>
                                <div>
                                    <p className="text-sm">{transaction.dateOfTransaction}</p>
                                    <p>{transaction.nameOfTransaction}</p>
                                </div>

                                <p className="text-blue-400">-{transaction.priceOfTransaction}</p>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default Dashboard;