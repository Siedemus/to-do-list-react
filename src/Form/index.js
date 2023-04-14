import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newContent, setNewContent] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newContent.trim())
        setNewContent("")
    };

    return (
        <>
            <form onSubmit={onFormSubmit} className="form">
                <input
                    onChange={({ target }) => setNewContent(target.value)}
                    value={newContent}
                    className="form__input"
                    placeholder="Co jest do zrobienia?" />
                <button className="form__button">Dodaj zadanie</button>
            </form>
        </>
    )
}

export default Form;