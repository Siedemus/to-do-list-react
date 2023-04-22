import "./style.css";
import { List } from "./styled";

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__item ${task.done && hideDone ? " list__item--hidden" : ""}`}
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
            </li>
        ))}
    </List>
)

export default TasksList;