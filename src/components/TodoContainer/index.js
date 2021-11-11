import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import CardTodo from "../CardTodo";
import { ConatinerListTodo } from "./styled";

function TodoContainer() {
  const { state } = useContext(TodoContext);
  const { filterTodos } = state;
  return (
    <ConatinerListTodo>
      {state.todos.length > 0 ? (
        filterTodos.map((todo) => <CardTodo key={todo.id} todo={todo} />)
      ) : (
        <span style={{"margin":"0 auto"}}>No hay todo list</span>
      )}
    </ConatinerListTodo>
  );
}

export default TodoContainer;
