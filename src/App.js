import "./App.css";

import AddTask from "./pages/AddTask";
import Home from "./pages/Home";

import { Route } from "wouter";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <Route path="/" component={Home} />
        <Route path="/addTask" component={AddTask} />
      </TodoProvider>
    </>
  );
}

export default App;
