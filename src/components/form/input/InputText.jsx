const InputText = (props) => {
    return(
        <>
            <div className="input-form">
                <input 
                    type={props.type === undefined ? 'text' : props.type}
                    id={props.id}
                    className="text-simple" 
                    value={props.value}
                    onChange={props.change}
                    placeholder={props.placeholder}
                    maxLength={props.maxLength}
                />
                <label htmlFor={props.id} className="icon-simple">
                    {props.icon}
                </label>
            </div>
            {/* <MessageBox message={getMessage(0)} /> */}
        </>
    );
};

export default InputText;
