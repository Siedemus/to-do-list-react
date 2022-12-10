import React from "react"
import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <>
        {tasks.length > 0 && (
            <>
                <button
                    className="container__button"
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż " : "Ukryj "}ukończone
                </button>
                <button
                    className="container__button"
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </>
);

export default Buttons;