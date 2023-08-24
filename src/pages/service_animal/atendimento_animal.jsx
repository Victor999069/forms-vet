import { useState } from "react";
import BaseLayout from "../../../template/layout/BaseLayout";

const Atendimento_animal = () => {
    const [dataAtendimento, setDataAtendimento] = useState();
    const [animalNumber, setAnimalNumber] = useState('');
    const [animalName, setAnimalName] = useState('');
    const [particularity, setParticularity] = useState('');
    const [treatment, setTreatment] = useState('');
    const [weight, setWeight] = useState('');
    const [registrationVaccine, setRegistrationVaccine] = useState('');
    const [appliedMedication, setAppliedMedication] = useState('');
    const [bodyScore, setBodyScore] = useState('');
    const [observation, setObservation] = useState('');

    const handleDataAtendimentoChange = (event) => {
        setDataAtendimento(event.target.value);
    };

    const handleAnimalNumberChange = (event) => {
        setAnimalNumber(event.target.value);
    };

    const handleAnimalNameChange = (event) => {
        setAnimalName(event.target.value);
    };

    const handleParticularityChange = (event) => {
        setParticularity(event.target.value);
    };

    const handleTreatmentChange = (event) => {
        setTreatment(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleRegistrationVaccineChange = (event) => {
        setRegistrationVaccine(event.target.value);
    };

    const handleAppliedMedicationChange = (event) => {
        setAppliedMedication(event.target.value);
    };

    const handleBodyScoreChange = (event) => {
        setBodyScore(event.target.value);
    };

    const handleObservationChange = (event) => {
        setObservation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implemente a lógica de envio ou armazenamento dos dados aqui
        console.log('Dados enviados:', {
          dataAtendimento,
          animalNumber,
          animalName,
          particularity,
          treatment,
          weight,
          registrationVaccine,
          appliedMedication,
          bodyScore,
          observation,
        });
      };


    return(
        <BaseLayout>
            <div>
            <form onSubmit={handleSubmit}></form>
            {/* construir a logica */}
            <div className="container-group">
            <label htmlFor="dataAtendimento"> Data Atendimento:</label>
            <input
                type="date"
                id="dataAtendimento"
                value={dataAtendimento}
                onChange={handleDataAtendimentoChange}
                required
            />
            </div>
            <div className="container-group">
                <label htmlFor="animalNumber"></label>
                <input
                    type="text"
                    id="animalNumber"
                    value={animalNumber}
                    onChange={handleAnimalNumberChange}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="animalName"></label>
                <input
                    type="text"
                    id="animalName"
                    value={animalName}
                    onChange={handleAnimalNameChange}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="particularity"></label>
                <input
                    type="text"
                    id="particularity"
                    value={particularity}
                    onChange={handleParticularityChange}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="treatment"></label>
                <input
                    type="text"
                    id="treatment"
                    value={treatment}
                    onChange={handleTreatmentChange}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="weight"></label>
                <input
                    type="text"
                    id="weight"
                    value={weight}
                    onChange={handleWeightChange}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="registrationVaccine"></label>
                <input
                    type="text"
                    id="registrationVaccine"
                    value={registrationVaccine}
                    onChange={handleRegistrationVaccineChange}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="appliedMedication"></label>
                <input
                    type="text"
                    id="appliedMedication"
                    value={appliedMedication}
                    onChange={handleAppliedMedicationChange}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="bodyScore"></label>
                <input
                    type="text"
                    id="bodyScore"
                    value={bodyScore}
                    onChange={handleBodyScoreChange}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="observation"></label>
                <input
                    type="text"
                    id="observation"
                    value={observation}
                    onChange={handleObservationChange}
                    required
                />
            </div>
        </div>
        </BaseLayout>
    );
};

export default Atendimento_animal;