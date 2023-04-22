import "./style.css";
import { Item, List } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <button
                    className="list__button list__button--done"
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✔" : ""}
                </button>
                <p
                    className={`list__text${task.done ? " list__text--done" : ""}`}>
                    {task.content}
                </p>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list__button list__button-remove">
                    🗑
                </button>
            </Item>
        ))}
    </List>
)

export default TasksList;