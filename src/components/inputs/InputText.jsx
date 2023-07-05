const InputText = ({type, id, ph, val}) => {
    return <input 
        type={type !== undefined ? type : 'text'} 
        className="form-input" 
        id={id !== undefined ? id : ''} 
        value={val !== undefined ? val : ''} 
        defaultValue={val !== undefined ? val : ''}
        placeholder={ph !== undefined ? ph : ''}
    />;
};

export default InputText;
