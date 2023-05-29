import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newContent, setNewContent] = useState("");
  const inputRef = useRef();

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newContent.trim();

    if (trimmedNewTaskContent) {
      dispatch(
        addTask({
          content: trimmedNewTaskContent,
          done: false,
          id: nanoid(),
        })
      );
    }

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
        <Button>Dodaj zadanie</Button>
      </StyledForm>
    </>
  );
};

export default Form;
