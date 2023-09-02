import { forwardRef } from "react";
// import MessageBox from "../MessageBox";

const InputTextRef = forwardRef(function InputTextRef(props, ref) {
    return(
        <>
            <div className="input-form">
                <input 
                    type={props.type === undefined ? 'text' : props.type}
                    id={props.id}
                    className="text-simple" 
                    ref={ref}
                    placeholder={props.placeholder}
                />
                <label htmlFor={props.id} className="icon-simple">
                    {props.icon}
                </label>
            </div>
            {/* <MessageBox message="Preencher Campo" /> */}
        </>
    );
});

export default InputTextRef;
