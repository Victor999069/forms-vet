import './register.scss';
import brazilianStates from '../../../utils/MockData';
import InputRadio from '../../../components/inputs/InputRadio';
import Button from '../../../components/button/Button';
import { buscaCepAPI } from '../../../router/axios';
import { useCallback, useEffect, useRef, useState } from 'react';

const Register = () => {
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState();
    const [states, setStates] = useState([]);
    const [error, setError] = useState('');
    const isLoaded = useRef(false);

    const buscaCep = useCallback(() => {
        buscaCepAPI.get(`${zipCode}/json/`).then(data => {
            if ((data.status === 200 || data.status === 201) && data.statusText === 'OK') {
                setAddress(data.data);
            }
        }).catch(error => {
            console.log(error.config);
            console.log(error.request);
            setError(error.message);
        });
    }, [zipCode]);

    useEffect(() => {
        if (!isLoaded.current) {
            setStates(brazilianStates);
        }
        if (zipCode?.length === 8) {
            buscaCep();
        }
        return () => isLoaded.current = true;
    }, [zipCode, buscaCep]);

    return(
        <div className="container">
            <div>
                <span>{error}</span>
            </div>
            <h1 className="container-header">Cadastro</h1>
            <form className="form-container">
                <div className="fr-col">
                    <div className="fr-row w-max">
                        <div className="form-container__content">
                            <label htmlFor="cadnomecompleto">Nome Completo</label>
                            <input type="text" className="form-input" id="cadnomecompleto" />
                        </div>
                    </div>
                    <div className="fr-row w-max">
                        <div className="form-container__content">
                            <label htmlFor="cademail">E-mail</label>
                            <input type="text" className="form-input" id="cademail" />
                        </div>
                    </div>
                    <div className="fr-row w-md">
                        <div className="form-container__content">
                            <label htmlFor="caddatanasc">Data Nascimento</label>
                            <input type="text" className="form-input" id="caddatanasc" />
                        </div>
                    </div>
                    <div className="fr-row w-md">
                        <div className="form-container__content">
                            <label htmlFor="cadcep">CEP</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                id="cadcep" 
                                value={zipCode} 
                                onChange={(event) => setZipCode(event.target.value.replace(/\D/g, ''))}
                            />
                        </div>
                    </div>
                    <div className="fr-row w-xl">
                        <div className="form-container__content">
                            <label htmlFor="cadendereco">Endereço</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                id="cadendereco" 
                                defaultValue={address !== undefined ? address.logradouro : ''} 
                            />
                        </div>
                    </div>
                    <div className="fr-row w-sm">
                        <div className="form-container__content">
                            <label htmlFor="cadendnum">Número</label>
                            <input type="text" className="form-input" id="cadendnum" />
                        </div>
                    </div>
                    <div className="fr-row w-lg">
                        <div className="form-container__content">
                            <label htmlFor="cadcomplem">Complemento</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                id="cadcomplem" 
                                defaultValue={address !== undefined ? address.complemento : ''} 
                            />
                        </div>
                    </div>
                    <div className="fr-row w-lg">
                        <div className="form-container__content">
                            <label htmlFor="caduf">UF</label>
                            <select className="form-input" id="caduf">
                                {states?.map((item, index) => 
                                <option value={item.abbrev} key={index}
                                selected={address !== undefined && item.abbrev.match(address.uf)}
                                >{item.state}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="fr-row w-lg">
                        <div className="form-container__content">
                            <label htmlFor="cadnvsenha">Nova Senha</label>
                            <input type="text" className="form-input" id="cadnvsenha" />
                        </div>
                    </div>
                    <div className="fr-row w-lg">
                        <div className="form-container__content">
                            <label htmlFor="cadconfnvsen">Confirmar Senha</label>
                            <input type="text" className="form-input" id="cadconfnvsen" />
                        </div>
                    </div>
                </div>
                <section className="form-container__fr-section">
                    <h4 className="form-container__fr-section__header">Foco do Serviço</h4>
                    <div className="form-container__fr-section__input-group">
                        <div className="form-container__fr-section__input-group__block">
                            <InputRadio 
                                text="Administrar Animais" 
                                lfor="cadserviceadmanml" 
                                name="admsrv"
                            />
                        </div>
                        <div className="form-container__fr-section__input-group__block">
                            <InputRadio 
                                text="Consultoria em Produção de Leite" 
                                lfor="cadserviceconsmlk" 
                                name="admsrv"
                            />
                        </div>
                    </div>
                </section>
                <section className="form-container__fr-section">
                    <h4 className="form-container__fr-section__header">Porte da Fazenda</h4>
                    <div className="form-container__fr-section__input-group">
                        <div className="form-container__fr-section__input-group__block">
                            <InputRadio 
                                text="10 a 30 Vacas" 
                                lfor="frm1030" 
                                name="frmhld"
                            />
                        </div>
                        <div className="form-container__fr-section__input-group__block">
                            <InputRadio 
                                text="40 a 80 Vacas" 
                                lfor="frm4080" 
                                name="frmhld"
                            />
                        </div>
                        <div className="form-container__fr-section__input-group__block">
                            <InputRadio 
                                text="70 a 90 Vacas" 
                                lfor="frm7090" 
                                name="frmhld"
                            />
                        </div>
                    </div>
                </section>
                <div className="form-container__fr-control">
                    <Button clname="secondary" text="Cadastrar" />
                </div>
            </form>
        </div>
    );
};

export default Register;
