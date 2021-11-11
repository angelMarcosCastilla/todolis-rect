import "./App.css";

import AddTask from "./pages/AddTask";
import Home from "./pages/Home";

import { Route } from "wouter";
import TodoProvider from "./context/TodoContext";
import Header from "./components/layout/Header";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <>
      <Header/>
      <TodoProvider>
        <Route path="/" component={Home} />
        <Route path="/addTask" component={AddTask} />
        <Route path="/editTask/:id" component={EditTask}/> 
      </TodoProvider>
    </>
  );
}

export default App;
