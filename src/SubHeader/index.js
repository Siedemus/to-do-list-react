import "./style.css"

const SubHeader = ({ title, extraContent }) => (
    <h2 className={`section__header ${extraContent}`}>{title}</h2>
)

export default SubHeader;