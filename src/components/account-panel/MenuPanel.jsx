import { Link } from 'react-router-dom';
import './menu-panel.scss';
import { PersonCircle } from '../style-icons/StyledIcons';

const MenuPanel = () => {
    return(
        <div className="control-item">
            <button type="button" className="icon-button">
                <PersonCircle />
            </button>
            <div className="control-item__dropdown">
                <div className="control-item__dropdown__submenu">
                    <Link to="/conta/cadastro">Cadastro</Link>
                </div>
                <div className="control-item__dropdown__submenu">
                    <Link to="/conta/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default MenuPanel;