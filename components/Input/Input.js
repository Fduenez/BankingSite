import React from "react";

const Input = (props, ref) => {
    let style = "form-input block rounded-md border-gray-300 placeholder:text-gray-300 w-full";
    if(props.errors){
        style = "form-input block rounded-md border-red-300 placeholder:text-gray-300 w-full"
    }

    return(
        <div className="my-4">
            <label className="block text-gray-400">{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} ref={ref} className={style}/>
        </div>


    );
};

export default React.forwardRef(Input);