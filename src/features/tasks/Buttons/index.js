import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
} from "../../tasksSlice";
import { ButtonsContainer, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    !areTasksEmpty && (
      <ButtonsContainer>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          disabled={isEveryTaskDone}
          onClick={() => dispatch(setAllDone())}
        >
          Ukończ wszystkie
        </Button>
      </ButtonsContainer>
    )
  );
};

export default Buttons;
