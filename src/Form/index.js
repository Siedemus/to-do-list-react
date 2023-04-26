import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newContent, setNewContent] = useState("");
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newContent.trim();

    if (trimmedNewTaskContent) {
      addNewTask(trimmedNewTaskContent)
    };

    setNewContent("");
    focusInput();
  };

  return (
    <>
      <StyledForm onSubmit={onFormSubmit}>
        <Input
          ref={inputRef}
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
