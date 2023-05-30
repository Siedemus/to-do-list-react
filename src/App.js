import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./features/navigation/Navigation";
import TasksPage from "./features/tasks/TasksPage/TasksPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Redirect to="/zadania" />
    </Switch>
  </HashRouter>
);

export default App;
