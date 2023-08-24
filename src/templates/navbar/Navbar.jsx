import { Link } from 'react-router-dom';
import './navbar.scss';
import { PersonCircle } from '../../components/style-icons/StyledIcons';

const Navbar = () => {
    const navLinks = {
        menu: [
            { link: '/servicos', text: 'Serviços' },
            { link: '/negocios', text: 'Negócios' },
            { link: '/contato', text: 'Contato' },
            { link: '/sobre', text: 'Sobre' }
        ],
        dropdown: [
            {
                icon: <PersonCircle />,
                links: [
                    { link: '/conta/cadastro', text: 'Cadastro' },
                    { link: '/conta/login', text: 'Login' }
                ]
            }
        ]
    };

    const closeMenu = () => {
        const nav = document.querySelector('.header__hamburger-toggle');
        nav.checked = false;
    };

    return(
        <header className="header">
            <Link to="/home" className="header__logo" onClick={closeMenu}>MyCompany</Link>
            <input type="checkbox" id="hamb-ctrl" className="header__hamburger-toggle" />
            <label htmlFor="hamb-ctrl" className="header__hamburger">
                <span className="header__hamburger__hamburger-line"></span>
            </label>
            <nav className="header__nav">
                <ul className="header__nav__menu">
                    {navLinks.menu.map((item, index) =>
                    <li key={index}>
                        <Link to={item.link} onClick={closeMenu}>{item.text}</Link>
                    </li>)}
                </ul>
                <ul className="header__nav__dropdown">
                    {navLinks.dropdown.map((item, index) =>
                    <li key={index}>
                        <Link to="#" className="dropdown-icon">{item.icon}</Link>
                        <ul className="dropdown-item">
                            {item.links.map((subitem, idx) =>
                            <li key={idx}>
                                <Link to={subitem.link} onClick={closeMenu}>{subitem.text}</Link>
                            </li>)}
                        </ul>
                    </li>)}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
