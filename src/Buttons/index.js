import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    return tasks.length > 0 && (
        <div className="container__buttons">
            <button
                onClick={toggleHideDone}
                className="container__button"
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="container__button"
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
}

export default Buttons