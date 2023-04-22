import "./style.css";
import { Button, Item, List } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button onClick={() => toggleTaskDone(task.id)} done>
          {task.done ? "✔" : ""}
        </Button>
        <p className={`list__text${task.done ? " list__text--done" : ""}`}>
          {task.content}
        </p>
        <Button onClick={() => removeTask(task.id)} remove>
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default TasksList;
