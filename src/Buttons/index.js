import React from "react"
import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => (
    <React.Fragment>
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="container__button">
                    {hideDoneTasks ? "Pokaż " : "Ukryj "}ukończone
                </button>
                <button
                    className="container__button"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </React.Fragment>
);

export default Buttons;