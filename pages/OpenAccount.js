import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Input from "../components/Input/Input";
import CheckBox from "../components/Input/CheckBox";
import MaskedField from 'react-masked-field';
import {useRef, useState} from "react";



const OpenAccount = () => {
    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA964cOTx3NVSVL3zccV-Hq03l7d7veZnQ
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const birthdateInputRef = useRef(null);
    const ssnInputRef = useRef(null);
    const savingsCheckBoxRef = useRef(null);
    const collegeCheckBoxRef = useRef(null);
    const retirementCheckBoxRef = useRef(null);

    const [error, setError] = useState({
        hasError: false,
        error: {
            firstNameError: "",
            lastNameError: "",
            usernameError: "",
            passwordError: "",
            birthdateError: "",
            ssnError: "",
            checkboxError: ""
        }

    });

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const firstName = firstNameInputRef.current.value;
        const lastName = lastNameInputRef.current.value;
        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;
        const birthdate = birthdateInputRef.current.value;
        const ssn = ssnInputRef.current.value;
        const savings = savingsCheckBoxRef.current.checked;
        const college = collegeCheckBoxRef.current.checked;
        const retirement = retirementCheckBoxRef.current.checked;

        const findError = {
            firstNameError: "",
            lastNameError: "",
            usernameError: "",
            passwordError: "",
            birthdateError: "",
            ssnError: "",
            checkboxError: ""
        }
        let errorFound = false;
        const passwordRegex = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}$');
        const dateRegex =  new RegExp('^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d$');
        if(firstName.length === 0){
            findError.firstNameError ="First name field must not be empty.";
            errorFound = true;
        }
        if(lastName.length === 0){
            findError.lastNameError ="Last name field must not be empty.";
            errorFound = true;
        }

        if(username.length === 0){
            findError.usernameError ="Username field must not be empty.";
            errorFound = true;
        }
        if(!passwordRegex.test(password)){
            findError.passwordError ="Password field should have 5 to 10 characters which contain only characters, numeric digits, underscore and first character must be a letter.";
            errorFound = true;
        }

        if(!dateRegex.test(birthdate)){
            findError.birthdateError ="Date of birth field must be in the format of MM/DD/YYYY.";
            errorFound = true;
        }
        console.log(ssn.length)
        if(ssn.length === 0){
            findError.ssnError = "Social Security Number must not be empty or fill the remaining numbers left."
            errorFound = true;
        }
        if(!savings && !college && !retirement){
            findError.checkboxError = "Please check at least one of the boxes."
            errorFound = true;
        }

        if(errorFound){
            setError({hasError: errorFound, error: findError});
            return;
        }
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA964cOTx3NVSVL3zccV-Hq03l7d7veZnQ",
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
            }).then(res => {
                if(res.ok) {

                }
                else{
                    res.json().then(data=> {
                        console.log(data);
                    });
                }
        });


    }

    return (
        <div className="p-0 m-0 box-border w-screen">
            <Navbar/>
             <div className="container mx-auto my-8 p-8 flex flex-col w-1/4 rounded-md border-2 border-gray-200">
                 <h1 className="font-bold text-lg">Sign Up</h1>
                 <form>

                     {
                           error.hasError ?  <div className="bg-red-50 p-4 rounded-md">

                               {Object.keys(error.error).map(name => {
                               return (error.error[name] !== "") ? <li key={error.error[name]} className="text-sm">{error.error[name]}</li> : null;
                           }) }</div>: null

                     }
                     <Input type="text" placeholder="Ex: John" label="First Name:" ref={firstNameInputRef} errors={error.error.firstNameError}/>
                     <Input type="text" placeholder="Ex: Doe" label="Last Name:" ref={lastNameInputRef} errors={error.error.lastNameError}/>
                     <Input type="text" placeholder="Username" label="Username:" ref={usernameInputRef} errors={error.error.usernameError}/>
                     <Input type="password" placeholder="Password" label="Password:" ref={passwordInputRef} errors={error.error.passwordError}/>
                     <Input type="text" placeholder="MM/DD/YYYY" label="Birthdate:" ref={birthdateInputRef} errors={error.error.birthdateError}/>
                     <MaskedField mask="999-99-9999" inputRef={el=>ssnInputRef.current = el} className="w-full border-gray-300 rounded-md border p-2"/>
                     <CheckBox label="Saving" refer={savingsCheckBoxRef}/>
                     <CheckBox label="College" refer={collegeCheckBoxRef}/>
                     <CheckBox label="Retirement" refer={retirementCheckBoxRef}/>
                     <button type="submit" onClick={(event) => onSubmitHandler(event)} className="bg-blue-500 my-4 rounded-md text-white p-1 w-full">Sign up</button>
                 </form>

             </div>
        </div>

    );
}
export default OpenAccount;