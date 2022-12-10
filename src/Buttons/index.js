import React from "react"
import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <>
        {tasks.length > 0 && (
            <>
                <button className="container__button" onClick={toggleHideDone}>
                    {hideDone ? "Pokaż " : "Ukryj "}ukończone
                </button>
                <button
                    className="container__button"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </>
);

export default Buttons;