import './input-radio.css';

const InputRadio = (props) => {
    return(
        <div className="radio-box">
            <input type="radio" className="input-radio" id={props.id} name={props.name} />
            <label htmlFor={props.id} className="radio-label">{props.text}</label>
        </div>
    );
};

export default InputRadio;
