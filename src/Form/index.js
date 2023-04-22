import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newContent, setNewContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newContent.trim();
    if (!trimmedNewTaskContent) {
      return setNewContent("");
    }

    addNewTask(trimmedNewTaskContent);
    setNewContent("");
  };

  return (
    <>
      <StyledForm onSubmit={onFormSubmit}>
        <Input
          onChange={({ target }) => setNewContent(target.value)}
          value={newContent}
          placeholder="Co jest do zrobienia?"
        />
        <Button className="form__button">Dodaj zadanie</Button>
      </StyledForm>
    </>
  );
};

export default Form;
