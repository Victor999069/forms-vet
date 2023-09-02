const SelectOption = (props) => {
    return(
        <>
            <div className="input-form">
                <select 
                    className="select-simple" 
                    id={props.id} 
                    onChange={props.change} 
                    value={props.value}
                >
                    {props.items?.length > 0 && props.items.map((item, index) => 
                    <option 
                        key={index} 
                        value={item.abbrev}
                    >
                        {item.state}
                    </option>)}
                </select>
                <label htmlFor={props.id} className="icon-simple">
                    {props.icon}
                </label>
            </div>
            {/* <MessageBox message={getMessage(5)} /> */}
        </>
    );
};

export default SelectOption;
