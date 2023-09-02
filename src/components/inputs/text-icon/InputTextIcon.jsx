import './input-text-icon.css';
import { PersonCircle } from "../../style-icons/StyledIcons";

const InputTextIcon = ({type, textRef, ph}) => {
    return (
        <div className="input-form">
            <input 
                type={type === undefined ? 'text' : type} 
                className="text-simple" 
                ref={textRef}
                placeholder={ph}
            />
            <PersonCircle />
        </div>
    );
};

export default InputTextIcon;
