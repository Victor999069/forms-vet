import './button.css';
import { useNavigate } from 'react-router-dom';

export default function Button({type, clname, route, text}) {
    const navigate = useNavigate();

    const routeRedirect = () => {
        navigate(route);
    };

    return(
        <button 
            type={type !== undefined ? type : 'button'} 
            className={`button-${clname !== undefined ? clname : 'primary'}`} 
            onClick={routeRedirect}
        >{text}</button>
    );
}
