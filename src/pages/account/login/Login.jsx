import { Link } from 'react-router-dom';
import { ShieldLock, PersonCircle } from '../../../components/style-icons/StyledIcons';
import './login.scss';
import { useRef } from 'react';

const Login = () => {
    const loginRef = useRef('');
    const passwordRef = useRef('');

    const submitLogin = (e) => {
        e.preventDefault();
    };
    
    return(
        <div className="container-login">
            <div className="container-login__content">
                <div className="container-login__content__logo">
                    <h1 className="container-login__content__logo__title">Login</h1>
                    <h6 className="container-login__content__logo__text">
                        Não possui conta conosco? <Link to="/conta/cadastro" className="link-login">Cadastre-se aqui</Link>.
                    </h6>
                </div>
                <form onSubmit={submitLogin} className="container-login__content__form">
                    <div className="input-form mb-2">
                        <input 
                            type="text" 
                            className="text-simple" 
                            id="txtLoginUser"
                            ref={loginRef}
                            placeholder="Usuário ou E-mail"
                        />
                        <label htmlFor="txtLoginUser" className="icon-simple">
                            <PersonCircle />
                        </label>
                    </div>
                    <div className="input-form">
                        <input 
                            type="password" 
                            className="text-simple" 
                            id="txtLoginPswd"
                            ref={passwordRef}
                            placeholder="Senha de acesso"
                        />
                        <label htmlFor="txtLoginPswd" className="icon-simple">
                            <ShieldLock />
                        </label>
                    </div>
                    <div className="container-login__content__form__control">
                        <div className="checkbox mb-2">
                            <label htmlFor="lgn-checkin-md">Permanecer logado</label>
                            <input type="checkbox" id="lgn-checkin-md" />
                        </div>
                        <button type="submit" className="button-simple">Entrar</button>
                        <div className="container-login__content__form__control__link-group">
                            <Link to="/conta/recuperar-senha" className="link-login">Esqueci a senha</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
