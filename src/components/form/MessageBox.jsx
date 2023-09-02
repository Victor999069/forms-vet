import './message-box.css';

function MessageBox({message}) {
    return(
        <div className="message-block">
            <span className="message-text">{message}</span>
        </div>
    );
}

export default MessageBox;
