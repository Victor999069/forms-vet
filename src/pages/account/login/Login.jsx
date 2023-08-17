import { useState } from "react";
import BaseLayout from "../../../template/layout/BaseLayout";

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
        <BaseLayout>
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
        </BaseLayout>
    );
};

export default Login;
