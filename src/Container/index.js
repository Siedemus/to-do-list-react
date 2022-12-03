import "./style.css";

const Container = ({ title, buttons }) => (
    <div className="section__container">
        <h2 className="section__header section__header--list">
            {title}
        </h2>
        <div className="container__buttons">
            {buttons}
        </div>
    </div>
);

export default Container;