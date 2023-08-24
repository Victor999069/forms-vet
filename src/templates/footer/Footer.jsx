import { Link } from 'react-router-dom';
import { MediaIcon } from '../../components/media-Icons/MediaIcon';
import './footer.scss';

const Footer = () => {
    const mediaLinks = [
        { icon: <MediaIcon name="facebook" />, link: 'https://facebook.com' },
        { icon: <MediaIcon name="twitter" />, link: 'https://twitter.com' },
        { icon: <MediaIcon name="instagram" />, link: 'https://instagram.com' },
        { icon: <MediaIcon name="linkedin" />, link: 'https://linkedin.com' },
        { icon: <MediaIcon name="youtube" />, link: 'https://youtube.com' },
        { icon: <MediaIcon name="gmail" />, link: 'https://gmail.com' },
        { icon: <MediaIcon name="telegram" />, link: 'https://telegram.com' },
        { icon: <MediaIcon name="whatsapp" />, link: 'https://whatsapp.com' }
    ];

    const contacts = [
        { index: 'Telefone', text: '(99) 3333-3333' },
        { index: 'Whatsapp', text: '(99) 9999-9999' },
        { index: 'Endereço', text: 'Rua Exemplo de Endereço, 999' },
        { index: 'Localização', text: 'Estado-ES' },
        { index: 'Email', text: 'minha_empresa@email.com' }
    ];

    return(
        <footer className="footer">
            <div className="footer__media">
                <ul className="footer__media__list-icons">
                    {mediaLinks.map((item, index) =>
                    <li key={index}>
                        <Link to={item.link}>
                            {item.icon}
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
            <div className="footer__group">
                <ul className="footer__group__links">
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre nós</Link>
                    </li>
                    <li>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                    <li>
                        <Link to="/suporte">Suporte</Link>
                    </li>
                    <li>
                        <Link to="/parceiros">Parceiros</Link>
                    </li>
                </ul>
                <ul className="footer__group__column">
                    {contacts.map((item, index) =>
                    <li key={index}>
                        <span>{item.index}:</span>
                        <strong>{item.text}</strong>
                    </li>)}
                </ul>
            </div>
            <div className="footer__bar">
                <span className="footer__bar__text">2023.</span>
                <span className="footer__bar__text">
                    Versão:<strong>beta.</strong>
                </span>
                <span className="footer__bar__text">MyCompany</span>
            </div>
        </footer>
    );
};

export default Footer;
