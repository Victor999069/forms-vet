import { Link } from 'react-router-dom';
import './navbar.scss';
import Button from '../../../components/button/Button';

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
                <img src="" alt="" />
            </div>
            <ul className="navbar__nav-menu">
                {links.map((el, i) =>
                <li key={i}>
                    <Link to={el.link}>{el.text}</Link>
                </li>
                )}
            </ul>
            <div className="navbar__nav-control">
                <Button text="Cadastro" route="/conta/cadastro" />
                <Button text="Cadastro Animal" route="/conta/cadastro-animal" />
            </div>
        </nav>
    );
};

export default Navbar;
