import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [{ content: "hello", id: 1, done: true }],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (tasks) => {
      tasks.hideDone = !tasks.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((tasks) => {
        if (tasks.done === false) {
          tasks.done = true;
        }
      });
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload);
      tasks.splice(index, 1);
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
