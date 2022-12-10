import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => {
    return (
        <ul className="list">
            {tasks.map(task => (
                <li key={task.id} className={`list__item${task.done && hideDone ? " list__item--hidden" : ""}`}>
                    <button className="list__button list__button--done">{task.done ? "✔" : ""}</button>
                    <p className={`list__text${task.done ? " list__text--done" : ""}`}>{task.content}</p>
                    <button className="list__button list__button-remove" onClick={() => removeTask(task.id)}>🗑</button>
                </li>
            ))}
        </ul>
    );
};

export default Tasks;