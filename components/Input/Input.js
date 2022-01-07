const Input = (props) => {
    return(
        <input type={props.type} placeholder={props.placeholder} className="block my-4 border-b-2 border-gray-300 focus:outline-none focus:border-gray-400 w-full"/>
    );
};

export default Input