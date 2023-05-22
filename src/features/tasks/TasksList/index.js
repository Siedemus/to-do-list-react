import { useSelector, useDispatch } from "react-redux";
import { Button, Content, Item, List } from "./styled";
import { selectTasks, toggleTaskDone } from "../../tasksSlice";

const TasksList = ({ removeTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} done>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button onClick={() => removeTask(task.id)} remove>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
