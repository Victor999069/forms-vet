import { useRef, useState } from "react";
import ButtonSimple from '../../../components/button/ButtonSimple';

const AnimalRegister = () => {
    const [idanimal, setIdAnimal] = useState(null);
    const nomeanimalRef = useRef('');
    const particularidadeRef = useRef('');
    const cartaovacinaRef = useRef('');
    const idadeRef = useRef('');
    const racaRef = useRef('');
    const sexoRef = useRef('');

    const gerarIdAnimal = () => {
        const novoId = Math.floor(Math.random() * 100000) + 1;
        return novoId;
    };

    const handleSalvar = () => {
        const idNovo = gerarIdAnimal();
        setIdAnimal(idNovo);
    };

    return(
        <div className="container">
            <div className="container-id">
                <label htmlFor="idanimal">Id Animal:</label>
                <input
                    type="text"
                    id="idanimal"
                    readOnly
                    value={idanimal}
                    required
                />
            </div>
            <div className="container-animal">
                <label htmlFor="nomeanimalRef">Nome Animal:</label>
                <input
                    type="text"
                    id="nomeanimalRef"
                    ref={nomeanimalRef}
                    required
                />
            </div>
            <div className="container-particularidade">
                <label htmlFor="particularidadeRef">Particularidade:</label>
                <input
                    type="text"
                    id="particularidadeRef"
                    ref={particularidadeRef}
                    required
                />
            </div>
            <div className="container-cartao">
                <label htmlFor="cartaovacinaRef">Cartão Vacina:</label>
                <input
                    type="text"
                    id="cartaovacinaRef"
                    ref={cartaovacinaRef}
                    required
                />
            </div>
            <div className="container-idade">
                <label htmlFor="idadeRef">Idade:</label>
                <input
                    type="text"
                    id="idadeRef"
                    ref={idadeRef}
                    required
                />
            </div>
            <div className="container-raca">
                <label htmlFor="raca">Raça:</label>
                <input
                    type="text"
                    id="racaRef"
                    ref={racaRef}
                    required
                />
            </div>
            <div className="container-sexo">
                <label htmlFor="sexoRef">Sexo:</label>
                <input
                    type="text"
                    id="sexoRef"
                    ref={sexoRef}
                    required
                />
            </div>
            <div className="form-container__fr-control">
                <ButtonSimple type="button" onClick={handleSalvar}>
                Salvar
                </ButtonSimple>
            </div>
        </div>
    );
};

export default AnimalRegister;