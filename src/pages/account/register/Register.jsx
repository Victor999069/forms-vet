import './register.scss';
import InputRadio from '../../../components/inputs/radio/InputRadio';
import { buscaCepAPI } from '../../../router/axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import brazilianStates from '../../../utils/StatesMock';
import {
    Calendar2, 
    SymbolAt, 
    GeoAlt, 
    Geo, 
    House, 
    ShieldLock, 
    Number, 
    Person,
    Search
} from '../../../components/style-icons/StyledIcons';
import InputTextRef from '../../../components/form/input/InputTextRef';
import InputText from '../../../components/form/input/InputText';
import SelectOption from '../../../components/form/input/SelectOption';
import ButtonSimple from '../../../components/button/ButtonSimple';
import SectionHeader from '../../../components/header/SectionHeader';

const Register = () => {
    // const [messageIndexer, setMessageIndexer] = useState();
    const fullnameRef = useRef('');
    const emailRef = useRef('');
    const birthDateRef = useRef('');
    const passwordRef = useRef('');
    const passwordConfirmRef = useRef('');
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [reference, setReference] = useState('');
    const [error, setError] = useState('');
    const [selected, setSelected] = useState();
    const [states, setStates] = useState([]);
    const isLoaded = useRef(false);

    const buscaCep = useCallback(() => {
        buscaCepAPI.get(`${zipCode}/json/`).then(data => {
            // console.log(data.data);
            if ((data.status === 200 || data.status === 201) && data.statusText === 'OK') {
                setAddress(data.data.logradouro);
                setReference(data.data.complemento);
                setSelected(data.data.uf);
            }
        }).catch(error => {
            console.log(error.config);
            console.log(error.request);
            setError(error.message);
        });
    }, [zipCode]);

    // const onZipCode = (event) => {
    //     setZipCode(event.replace(/\D/g, ''));
    // };

    const onRegisterSubmit = (event) => {
        event.preventDefault();
        // setMessageIndexer([]);
        
        // if (fullnameRef.current.value.trim().length < 8) {}
        // if (emailRef.current.value.trim().length < 11) {}
        // if (birthDateRef.current.value.trim().length < 10) {}
        // if (zipCode.trim().length < 8) {}
        // if (address.trim().length < 6) {}
        // if (selected.trim().length === 0) {}
        // if (passwordRef.current.value.trim().length < 8) {}
        // if (passwordConfirmRef.current.value.trim().length === 0) {}
        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {}

        console.log(fullnameRef.current.value);
        console.log(emailRef.current.value);
        console.log(birthDateRef.current.value);
        console.log(zipCode);
        console.log(address);
        console.log(addressNumber);
        console.log(reference);
        console.log(selected);
        console.log(passwordRef.current.value);
        console.log(passwordConfirmRef.current.value);
    };

    const onChangeAddress = (event) => {
        setAddress(event.target.value);
    };
    
    const onChangeNumber = (event) => {
        setAddressNumber(event.target.value);
    };
    
    const onChangeZipCode = (event) => {
        setZipCode(event.target.value.replace(/\D/g, ''));
    };

    const onChangeReference = (event) => {
        setReference(event.target.value);
    };
    
    const onChangeState = (event) => {
        setSelected(event.target.value);
    };

    useEffect(() => {
        if (!isLoaded.current) {
            const states = brazilianStates;
            
            setStates(states);
            setSelected(states[0].abbrev);
        }
        if (zipCode?.length === 8) {
            buscaCep();
        }
        return () => isLoaded.current = true;
    }, [buscaCep, states, zipCode?.length]);

    return(
        <div className="container">
            <div>
                <span>{error}</span>
            </div>
            <SectionHeader title="Cadastro" text="Preencha o formulário abaixo para completar o cadastro" />
            <form className="form-container" onSubmit={onRegisterSubmit}>
                <div className="fr-col">
                    <div className="fr-row w-max">
                        <InputTextRef
                            id="txtCadFullname"
                            ref={fullnameRef}
                            placeholder="Nome Completo"
                            icon={<Person />}
                        />
                    </div>
                    <div className="fr-row w-max">
                        <InputTextRef
                            type="email"
                            id="txtCadEmail"
                            ref={emailRef}
                            placeholder="Endereço de E-mail"
                            icon={<SymbolAt />}
                        />
                    </div>
                    <div className="fr-row w-lg">
                        <InputTextRef
                            id="txtCadBirthDate"
                            ref={birthDateRef}
                            placeholder="DD/MM/AAAA"
                            icon={<Calendar2 />}
                        />
                    </div>
                    <div className="fr-row w-lg">
                        <InputText
                            id="txtCadZipCode"
                            value={zipCode}
                            change={onChangeZipCode}
                            placeholder="CEP"
                            maxLength={8}
                            icon={<Search />}
                        />
                    </div>
                    <div className="fr-row w-xl">
                        <InputText
                            id="txtCadAddress"
                            value={address}
                            change={onChangeAddress}
                            placeholder="Endereço, Logradouro, etc..."
                            icon={<GeoAlt />}
                        />
                    </div>
                    <div className="fr-row w-sm">
                        <InputText
                            id="txtCadAddressNumber"
                            value={addressNumber}
                            change={onChangeNumber}
                            placeholder="Número"
                            icon={<Number />}
                        />
                    </div>
                    <div className="fr-row w-lg">
                        <InputText
                            id="txtCadLocalRef"
                            value={reference}
                            change={onChangeReference}
                            placeholder="Casa, Apmt, etc..."
                            icon={<House />}
                        />
                    </div>
                    <div className="fr-row w-lg">
                        <SelectOption
                            id="selCadUf"
                            value={selected}
                            change={onChangeState}
                            icon={<Geo />}
                            items={states}
                        />
                    </div>
                    <div className="fr-row w-lg">
                        <InputTextRef
                            type="password" 
                            id="txtCadNewPswd"
                            ref={passwordRef}
                            placeholder="Nova Senha"
                            icon={<ShieldLock />}
                        />
                    </div>
                    <div className="fr-row w-lg">
                        <InputTextRef
                            type="password" 
                            id="txtCadConfNewPswd"
                            ref={passwordConfirmRef}
                            placeholder="Confirmar Senha"
                            icon={<ShieldLock />}
                        />
                    </div>
                </div>
                <section className="form-container__fr-section">
                    <h4 className="form-container__fr-section__header">Foco do Serviço</h4>
                    <div className="form-container__fr-section__group-block">
                        <InputRadio 
                            id="cadserviceadmanml" 
                            name="admsrv"
                            text="Administrar Animais" 
                        />
                        <InputRadio 
                            id="cadserviceconsmlk" 
                            name="admsrv"
                            text="Consultoria em Produção de Leite" 
                        />
                    </div>
                </section>
                <section className="form-container__fr-section">
                    <h4 className="form-container__fr-section__header">Porte da Fazenda</h4>
                    <div className="form-container__fr-section__group-block">
                        <InputRadio 
                            id="frm1030" 
                            name="frmhld"
                            text="10 a 30 Vacas" 
                        />
                        <InputRadio 
                            id="frm4080" 
                            name="frmhld"
                            text="40 a 80 Vacas" 
                        />
                        <InputRadio 
                            id="frm7090" 
                            name="frmhld"
                            text="70 a 90 Vacas" 
                        />
                    </div>
                </section>
                <div className="form-container__fr-control">
                    <ButtonSimple
                        type="submit"
                    >Cadastro</ButtonSimple>
                </div>
            </form>
        </div>
    );
};

export default Register;
