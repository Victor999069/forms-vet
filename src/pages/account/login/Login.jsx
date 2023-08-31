import './login.scss';
import Button from '../../../components/button/Button';
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    return(
        <div className='container'>
            <div className="container-email">
                <label htmlFor="email">E-mail:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div className="container-senha">
                <label htmlFor="senha">Senha:</label>
                <input
                    type="text"
                    id="senha"
                    value={senha}
                    onChange={handleSenhaChange}
                    required
                />
            </div>
            <div className='container__fr-control'>
                <Button clname="secondary" text="Cancelar"/>
            </div>
            <div className='container__fr-control'>
                <Button clname="secondary" text="Login"/>
            </div>
        </div>
    );
};

export default Login;
