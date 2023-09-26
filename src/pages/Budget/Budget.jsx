import { useRef, useState } from "react";
//import ButtonSimple from '../../../components/button/ButtonSimple';


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
    const dataAtual = new Date();

    dataAtual.setDate(dataAtual.getDate() + 15);

    const dataform = dataAtual.toISOString().split('T')[0];

   // const gerarIdOrcamento = () => {
    //    const novoId = Math.floor(Math.random() * 100000) + 1;
    //    return novoId;
    //};

    //const handleSalvarOrcamento = () => {
   //     const Idnovo = gerarIdOrcamento();
     //   return Idnovo;
 //   };

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
                <label htmlFor="serviçoRef">Tipo de Serviço:</label>
                <input
                    type="text"
                    id="serviçoRef"
                    ref={serviçoRef}
                    required
                />
            </div>
            <div>
                <label htmlFor="precoservicoRef">Preço Serviço:</label>
                <input
                    type="text"
                    id="precoservicoRef"
                    ref={precoservicoRef}
                    required
                />
            </div>
            <div>
                <label htmlFor="totalservico">Total Serviço</label>
                <input
                    type="text"
                    id="totalservico"
                    value={totalservico}
                    onChange={handleTotalServico}
                    required
                />
            </div>
            <div>
                <label htmlFor="nomecliente">Nome Cliente:</label>
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
                <label htmlFor="emailclienteRef">E-mail Cliente:</label>
                <input
                    type="email"
                    id="emailclienteRef"
                    ref={emailclienteRef}
                    required
                />
            </div>
            <div>
                <label htmlFor="datavalidadeorca">Validade Orçamento:</label>
                <input
                    type="date"
                    id="datavalidadeorca"
                    ref={datavalidadeorca}
                    defaultValue={dataform}
                    required
                />
            </div>
            <div>
                <label htmlFor="statusorca">Status Orçamento:</label>
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