import { useDispatch, useSelector } from "react-redux";
import { StyledButton, StyledLoading, StyledError } from "./styled";
import { fetchExampleTasks, selectLoadingStatus } from "../../tasksSlice";

const FetchButton = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectLoadingStatus);
  return (
    <>
      {loadingStatus === "" ? (
        <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
          Pobierz przykładowe zadania
        </StyledButton>
      ) : loadingStatus === "loading" ? (
        <StyledLoading>Ładowanie...</StyledLoading>
      ) : loadingStatus === "error" ? (
        <StyledError>Error</StyledError>
      ) : null}
    </>
  );
};

export default FetchButton;
