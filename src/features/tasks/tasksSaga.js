import {
  takeLatest,
  call,
  put,
  delay,
  takeEvery,
  select,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  selectTasks,
  setError,
  setTasks,
} from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch {
    yield put(setError());
    yield delay(2000);
    yield put(setTasks([]));
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export default function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
