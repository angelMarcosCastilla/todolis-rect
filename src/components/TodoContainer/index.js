import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import CardTodo from "../CardTodo";
import { ConatinerListTodo } from "./styled";

function TodoContainer() {
  const { state } = useContext(TodoContext);
  const { filterTodos } = state;
  console.log(filterTodos)
  return (
    <ConatinerListTodo>
      {filterTodos.map((todo) => {
        return <CardTodo key={todo.id} todo={todo} />;
      })}
    </ConatinerListTodo>
  );
}

export default TodoContainer;
