import "./App.css";

import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { Route } from "wouter";
import TodoProvider from "./context/TodoContext";
import Header from "./components/layout/Header";
import EditTask from "./pages/EditTask";
import UserProvider from "context/UserContext";

function App() {
  return (
    <UserProvider>
      <Header />
      <Route path="/login" component={Login} />
      <TodoProvider>
        <Route path="/" component={Home} />
        <Route path="/addTask" component={AddTask} />
        <Route path="/editTask/:id" component={EditTask} />
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
