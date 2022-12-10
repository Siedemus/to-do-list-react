import "./style.css";
import { useState } from "react";

const Form = ({ title, addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("")

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(newTaskContent === ""){
            return;
        };
        addNewTask(newTaskContent.trim())
        setNewTaskContent("")
    }

    return (

        <form className="form" onSubmit={onSubmitForm}>
            <input className="form__input" placeholder="Co jest do zrobienia?" value={newTaskContent} onChange={({target}) => setNewTaskContent(target.value)}/>
            <button className="form__button">{title}</button>
        </form>
    )
};

export default Form;