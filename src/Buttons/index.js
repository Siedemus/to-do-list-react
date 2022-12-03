import React from "react"
import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => (
    <>
        {tasks.length > 0 && (
            <>
                <button className="container__button">
                    {hideDoneTasks ? "Pokaż " : "Ukryj "}ukończone
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