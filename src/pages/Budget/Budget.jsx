import { useRef, useState } from "react";


const Budget = () => {
    const idorçamentoRef = useRef('');
    const serviçoRef = useRef('');
    const precoservicoRef = useRef('');
    const [totalservico, setTotalServico] = useState('');
    const nomecliente = useRef('');
    const telefonecliente = useRef('');
    const emailclienteRef = useRef('');
    const datavalidadeorca = useRef('');
    const statusorca = useRef('');

    const handleTotalServico = (event) => {
        setTotalServico(event.target.value);
    };

    return(
        <div className="container">
            <div>
                <label htmlFor="idorçamentoRef"> Nº Orçamento:</label>
                <input
                    type="text"
                    id="idorçamentoRef"
                    ref={idorçamentoRef}
                    required
                />
            </div>
            <div>
                <label htmlFor="serviçoRef">Tipo de serviço:</label>
                <input
                    type="text"
                    id="serviçoRef"
                    ref={serviçoRef}
                    required
                />
            </div>
            <div>
                <label htmlFor="precoservicoRef">Preço serviço:</label>
                <input
                    type="text"
                    id="precoservicoRef"
                    ref={precoservicoRef}
                    required
                />
            </div>
            <div>
                <label htmlFor="totalservico">Total serviço</label>
                <input
                    type="text"
                    id="totalservico"
                    value={totalservico}
                    onChange={handleTotalServico}
                    required
                />
            </div>
            <div>
                <label htmlFor="nomecliente">Nome cliente:</label>
                <input
                    type="text"
                    id="nomecliente"
                    ref={nomecliente}
                    required
                />
            </div>
            <div>
                <label htmlFor="telefonecliente">Telefone Cliente:</label>
                <input
                    type="tel"
                    id="telefonecliente"
                    ref={telefonecliente}
                    required
                />
            </div>
            <div>
                <label htmlFor="emailclienteRef">E-mail cliente:</label>
                <input
                    type="email"
                    id="emailclienteRef"
                    ref={emailclienteRef}
                    required
                />
            </div>
            <div>
                <label htmlFor="datavalidadeorca">Validade orçamento:</label>
                <input
                    type="date"
                    id="datavalidadeorca"
                    ref={datavalidadeorca}
                    required
                />
            </div>
            <div>
                <label htmlFor="statusorca">Status orçamento:</label>
                <input
                    type="text"
                    id="statusorca"
                    ref={statusorca}
                    required
                />
            </div>
        </div>
    );
};

export default Budget;