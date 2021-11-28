import "./App.css";
import { Route, Switch } from "wouter";
import PrivateRoute from "router/PrivateRoute";
import UserProvider from "context/UserContext";
import AddTask from "pages/AddTask";
import Home from "pages/Home";
import Login from "pages/Login";
import EditTask from "pages/EditTask";
import ErrorPage from "pages/ErrorPage";

function App() {
  return (
    <>
      <UserProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Home} />
          <PrivateRoute path="/addTask" component={AddTask} />
          <PrivateRoute path="/editTask/:id" component={EditTask} />
          <Route component={ErrorPage} />
        </Switch>
      </UserProvider>
    </>
  );
}

export default App;
