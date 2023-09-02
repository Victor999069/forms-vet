import './button-simple.css';

export function ButtonSimple(props) {
    return(
        <button 
            type={props.type !== undefined ? props.type : 'button'} 
            className="button-simple"
            {...props}
        >{props.children}</button>
    );
}

export default ButtonSimple;
