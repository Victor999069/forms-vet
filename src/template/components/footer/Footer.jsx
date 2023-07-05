import { Link } from 'react-router-dom';
import './footer.scss';
import { Icon } from '../../../components/Icons/Icon';

const Footer = () => {
    const mediaLinks = [
        { icon: 'facebook', link: 'https://facebook.com' },
        { icon: 'twitter', link: 'https://twitter.com' },
        { icon: 'instagram', link: 'https://instagram.com' },
        { icon: 'linkedin', link: 'https://linkedin.com' },
        { icon: 'youtube', link: 'https://youtube.com' },
        { icon: 'gmail', link: 'https://gmail.com' },
        { icon: 'telegram', link: 'https://telegram.com' },
        { icon: 'whatsapp', link: 'https://whatsapp.com' }
    ];

    return(
        <footer className="footer">
            <div className="footer__media">
                <ul className="footer__media__menu">
                    {mediaLinks.map((el, index) =>
                    <li key={index}>
                        <Link to={el.link}>
                            <Icon name={el.icon} />
                        </Link>
                    </li>)}
                </ul>
            </div>
            <div className="footer__container">
                <div className="footer__container__column">
                    <h2 className="footer__container__column__header">Title 1</h2>
                    <ul className="footer__container__column__list">
                        <li>
                            <Link to="/">Link 1</Link>
                        </li>
                        <li>
                            <Link to="/">Link 2</Link>
                        </li>
                        <li>
                            <Link to="/">Link 3</Link>
                        </li>
                        <li>
                            <Link to="/">Link 4</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__container__column">
                    <h2 className="footer__container__column__header">Title 1</h2>
                    <ul className="footer__container__column__list">
                        <li>
                            <Link to="/">Link 1</Link>
                        </li>
                        <li>
                            <Link to="/">Link 2</Link>
                        </li>
                        <li>
                            <Link to="/">Link 3</Link>
                        </li>
                        <li>
                            <Link to="/">Link 4</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__container__column">
                    <h2 className="footer__container__column__header">Title 1</h2>
                    <ul className="footer__container__column__list">
                        <li>
                            <Link to="/">Link 1</Link>
                        </li>
                        <li>
                            <Link to="/">Link 2</Link>
                        </li>
                        <li>
                            <Link to="/">Link 3</Link>
                        </li>
                        <li>
                            <Link to="/">Link 4</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
