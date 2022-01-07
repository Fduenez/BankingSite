import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Input from "../components/Input/Input";

const OpenAccount = () => {
    return (
        <div className="p-0 m-0 box-border w-screen">
            <Navbar/>
             <div className="container mx-auto my-8 p-8 flex flex-col w-1/4 rounded-md border-2 border-gray-200">
                 <h1 className="font-bold text-lg">Sign Up</h1>
                 <form>
                     <Input type="text" placeholder="First Name"/>
                     <Input type="text" placeholder="Last Name"/>
                     <Input type="text" placeholder="Username"/>
                     <Input type="password" placeholder="Password"/>
                     <Input type="text" placeholder="Account Number"/>
                     <Input type="text" placeholder="Birthdate"/>
                     <Input type="text" placeholder="SSN"/>
                     <button type="submit" className="bg-blue-500 my-4 rounded-md text-white p-1 w-full">Sign up</button>

                 </form>

             </div>
        </div>

    );
}
export default OpenAccount;