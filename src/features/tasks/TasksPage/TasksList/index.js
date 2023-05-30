import { useSelector, useDispatch } from "react-redux";
import { Button, Content, Item, List, StyledLink } from "./styled";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import { useQueryParameter } from "../../useQueryParameter";
import { searchQueryParamName } from "../../searchQueryParamName";

const TasksList = () => {
  const query = useQueryParameter(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} done>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
