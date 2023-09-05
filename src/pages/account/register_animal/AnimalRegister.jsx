import { useRef } from "react";

const AnimalRegister = () => {
    const idanimalRef = useRef(''); 
    const nomeanimalRef = useRef('');
    const particularidadeRef = useRef('');
    const cartaovacinaRef = useRef('');
    const idadeRef = useRef('');
    const racaRef = useRef('');
    const sexoRef = useRef('');

    return(
        <div>
            <div className="container-id">
                <label htmlFor="idanimal">Id Animal:</label>
                <input
                    type="text"
                    id="idanimal"
                    ref={idanimalRef}
                    required
                />
            </div>
            <div className="container-animal">
                <label htmlFor="nomeanimal">Nome Animal:</label>
                <input
                    type="text"
                    id="nomeanimal"
                    ref={nomeanimalRef}
                    required
                />
            </div>
            <div className="container-particularidade">
                <label htmlFor="particularidade">Particularidade:</label>
                <input
                    type="text"
                    id="particularidade"
                    ref={particularidadeRef}
                    required
                />
            </div>
            <div className="container-cartao">
                <label htmlFor="cartaovacina">Cartão Vacina:</label>
                <input
                    type="text"
                    id="cartaovacina"
                    ref={cartaovacinaRef}
                    required
                />
            </div>
            <div className="container-idade">
                <label htmlFor="idade">Idade:</label>
                <input
                    type="text"
                    id="idade"
                    ref={idadeRef}
                    required
                />
            </div>
            <div className="container-raca">
                <label htmlFor="raca">Raça:</label>
                <input
                    type="text"
                    id="raca"
                    ref={racaRef}
                    required
                />
            </div>
            <div className="container-sexo">
                <label htmlFor="sexo">Sexo:</label>
                <input
                    type="text"
                    id="sexo"
                    value={sexoRef}
                    required
                />
            </div>
        </div>
    );
};

export default AnimalRegister;
