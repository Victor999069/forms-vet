import './breadcrumb.css';

export default function Breadcrumb() {
    const bcList = ["home", "conta", "login"];

    return(
        <div className="breadcrumb">
            <ul>
                {bcList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}
