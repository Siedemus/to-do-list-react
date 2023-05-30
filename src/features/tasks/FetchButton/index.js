import { useDispatch } from "react-redux";
import { StyledButton } from "./styled";
import { fetchExampleTasks } from "../tasksSlice";

const FetchButton = () => {
  const dispatch = useDispatch();
  return (
    <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </StyledButton>
  );
};

export default FetchButton;
