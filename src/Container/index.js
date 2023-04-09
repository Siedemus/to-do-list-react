import "./style.css";

const Container = ({ subHeader, buttons }) => (
    <div className="section__container">
        {subHeader}
        {buttons}
    </div>
)

export default Container;