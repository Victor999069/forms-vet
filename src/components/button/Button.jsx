export default function Button({props}) {
    const { type, clType, action, text } = props;

    return <button 
        type={type !== undefined ? type : 'button'} 
        className={`button-${clType !== undefined ? clType : 'primary'}`} 
        onClick={action}
    >{text}
    </button>;
}
