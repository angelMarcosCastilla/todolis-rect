import styled from "styled-components";
import { useContext } from "react";
import CardTodo from "../CardTodo";
import { TodoContext } from "../../context/TodoContext";

function TodoContainer() {
  const {state} = useContext(TodoContext);
  return (
    <ConatinerListTodo>
      {state.map((todo) => (
        <CardTodo key={todo.id} todo={todo} />
      ))}
    </ConatinerListTodo>
  );
}

const ConatinerListTodo = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;
export default TodoContainer;
