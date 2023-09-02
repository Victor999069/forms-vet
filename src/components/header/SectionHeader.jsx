import './section-header.css';

const SectionHeader = ({title, text}) => {
    return(
        <div className="section-header">
            <h1 className="header-h1">{title}</h1>
            <h4 className="header-h4">{text}</h4>
        </div>
    );
};

export default SectionHeader;
