const CheckBox = (props) => {
    return(
        <label className="mr-2"><input type="checkbox" ref={props.refer} className="form-checkbox rounded text-blue-500 cursor-pointer"/> {props.label}</label>
    );
};

export default CheckBox;