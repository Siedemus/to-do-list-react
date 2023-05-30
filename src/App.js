import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./features/navigation/Navigation";
import Tasks from "./features/tasks/Tasks";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Redirect to="/zadania" />
    </Switch>
  </HashRouter>
);

export default App;
