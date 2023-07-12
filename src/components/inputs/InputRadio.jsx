const InputRadio = ({text, lfor, name}) => {
    return(
        <>
            <label htmlFor={lfor}>{text}</label>
            <input type="radio" className="input-radio" id={lfor} name={`inputRadio_${name}`} />
        </>
    );
};

export default InputRadio;
