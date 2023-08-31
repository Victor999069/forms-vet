import './AtendimentoAnimal.scss';
import { useRef } from "react";


const Atendimento_animal = () => {
    const dataAtendimentoRef = useRef();
    const animalNumberRef = useRef();
    const animalNameRef = useRef();
    const particularityRef = useRef();
    const treatmentRef = useRef();
    const weightRef = useRef();
    const registrationVaccineRef = useRef();
    const appliedMedicationRef = useRef();
    const bodyScoreRef = useRef();
    const observationRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implemente a lógica de envio ou armazenamento dos dados aqui
        console.log('Dados enviados:', {
          Data_Atendimenti: dataAtendimentoRef.current,
          Numero_Animal: animalNumberRef.current,
          Nome_Animal: animalNameRef.current,
          Particularidade: particularityRef.current,
          Tratamento: treatmentRef.current,
          Processo: weightRef.current,
          Registro_Vacina: registrationVaccineRef.current,
          Medicacao: appliedMedicationRef.current,
          Score: bodyScoreRef.current,
          Observ: observationRef.current,
        });
      };
      


    return(
        <div className="container">
            <form onSubmit={handleSubmit}></form>
            {/* construir a logica */}
            <div className="container-group">
            <label htmlFor="dataAtendimento"> Data Atendimento:</label>
            <input
                type="date"
                id="dataAtendimento"
                ref={dataAtendimentoRef}
                required
            />
            </div>
            <div className="container-group">
                <label htmlFor="animalNumber"> Numero Animal:</label>
                <input
                    type="text"
                    id="animalNumber"
                    ref={animalNumberRef}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="animalName">Nome Animal:</label>
                <input
                    type="text"
                    id="animalName"
                    ref={animalNameRef}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="particularity">Particularidade:</label>
                <input
                    type="text"
                    id="particularity"
                    ref={particularityRef}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="treatment">Tratamento:</label>
                <input
                    type="text"
                    id="treatment"
                    ref={treatmentRef}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="weight">Peso do animal:</label>
                <input
                    type="text"
                    id="weight"
                    ref={weightRef}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="registrationVaccine">Registro da vacina:</label>
                <input
                    type="text"
                    id="registrationVaccine"
                    ref={registrationVaccineRef}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="appliedMedication">Medicação aplicada:</label>
                <input
                    type="text"
                    id="appliedMedication"
                    ref={appliedMedicationRef}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="bodyScore">Peso corporal:</label>
                <input
                    type="text"
                    id="bodyScore"
                    ref={bodyScoreRef}
                    required
                />
            </div>
            <div className="container-group">
                <label htmlFor="observation">Observação:</label>
                <input
                    type="text"
                    id="observation"
                    ref={observationRef}
                    required
                />
            </div>
        </div>
    );
};

export default Atendimento_animal;