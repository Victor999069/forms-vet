import { useState } from "react";

const AnimalRegister = () => {
    const [idanimal, setIdAnimal] = useState('');
    const [nomeanimal, setNomeAnimal] = useState('');
    const [particularidade, setParticularidade] = useState('');
    const [cartaovacina, setCartaoVacina] = useState('');
    const [idade, setIdade] = useState('');
    const [raca, setRaca] = useState('');
    const [sexo, setSexo] = useState('');

    const handleIdAnimalChange = (event) => {
        setIdAnimal(event.target.value);
    };

    const handleNomeAnimalChange = (event) => {
        setNomeAnimal(event.target.value);
    };

    const handleParticularidadeChange = (event) => {
        setParticularidade(event.target.value);
    };

    const handleCartaoVacinaChange = (event) => {
        setCartaoVacina(event.target.value);
    };

    const handleIdadeChange = (event) => {
        setIdade(event.target.value);
    };

    const handleRacaChange = (event) => {
        setRaca(event.target.value);
    };

    const handleSexoChange = (event) => {
        setSexo(event.target.value);
    };

    return(
        <>
            <div>
                <label htmlFor="idanimal">Id Animal:</label>
                <input
                    type="text"
                    id="idanimal"
                    value={idanimal}
                    onChange={handleIdAnimalChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="nomeanimal">Nome Animal:</label>
                <input
                    type="text"
                    id="nomeanimal"
                    value={nomeanimal}
                    onChange={handleNomeAnimalChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="particularidade">Particularidade:</label>
                <input
                    type="text"
                    id="particularidade"
                    value={particularidade}
                    onChange={handleParticularidadeChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="cartaovacina">Cartão Vacina:</label>
                <input
                    type="text"
                    id="cartaovacina"
                    value={cartaovacina}
                    onChange={handleCartaoVacinaChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="idade">Idade:</label>
                <input
                    type="text"
                    id="idade"
                    value={idade}
                    onChange={handleIdadeChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="raca">Raça:</label>
                <input
                    type="text"
                    id="raca"
                    value={raca}
                    onChange={handleRacaChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="sexo">Sexo:</label>
                <input
                    type="text"
                    id="sexo"
                    value={sexo}
                    onChange={handleSexoChange}
                    required
                />
            </div>
        </>
    );
};

export default AnimalRegister;