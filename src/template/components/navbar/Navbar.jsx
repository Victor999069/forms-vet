import { Link } from 'react-router-dom';
import './navbar.scss';
import MenuPanel from '../../../components/account-panel/MenuPanel';

const Navbar = () => {
    const links = [
        { text: "Home", link: "/" },
        { text: "Contato", link: "/contato" },
        { text: "Serviços", link: "/servicos" },
        { text: "Sobre", link: "/sobre" }
    ];

    return(
        <nav className="navbar">
            <div className="navbar__nav-logo">
                <Link to="/home" className="navbar__nav-logo__logo-link">Logo</Link>
            </div>
            <ul className="navbar__nav-menu">
                {links.map((el, i) =>
                <li key={i}>
                    <Link to={el.link} className="menu-link">{el.text}</Link>
                </li>
                )}
            </ul>
            <div className="navbar__nav-control">
                <MenuPanel />
            </div>
        </nav>
    );
};

export default Navbar;
