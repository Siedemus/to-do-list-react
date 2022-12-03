import "./style.css";

const Form = ({ title }) => (
    <form className="form">
        <input className="form__input" placeholder="Co jest do zrobienia?" />
        <button className="form__button">{title}</button>
    </form>
);

export default Form;