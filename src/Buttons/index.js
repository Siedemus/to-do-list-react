import "./style.css";

const Buttons = ({ tasks, hideDone }) => {
    return tasks.length > 0 && (
        <div className="container__buttons">
            <button className="container__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="container__button"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
} 

export default Buttons