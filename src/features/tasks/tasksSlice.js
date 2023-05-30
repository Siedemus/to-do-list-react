import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
    loadingStatus: "",
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (tasks) => {
      tasks.hideDone = !tasks.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((tasks) => {
        if (tasks.done === false) {
          tasks.done = true;
        }
      });
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: (state) => {
      state.loadingStatus = "loading"
    },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loadingStatus = ""
    },
    setError: (state) => {
      state.loadingStatus = "error"
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  setTasks,
  setError,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectLoadingStatus = (state) => selectTasksState(state).loadingStatus;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export default tasksSlice.reducer;
