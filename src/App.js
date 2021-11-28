import "./App.css";
import { Route } from "wouter";
import PrivateRoute from "router/PrivateRoute";
import AddTask from "pages/AddTask";
import Home from "pages/Home";
import Login from "pages/Login";
import EditTask from "pages/EditTask";

function App() {

  return (
    <>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={Home} />
      <PrivateRoute path="/addTask" component={AddTask} />
      <PrivateRoute path="/editTask/:id" component={EditTask} />
    </>
  );
}

export default App;
