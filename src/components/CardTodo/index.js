import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { actionsTodo } from "../../context/TodoContext/actions";
import { useLocation } from "wouter";
import Label from "../Label";
import {
  Card,
  CardHeader,
  BtnCheck,
  CardBody,
  CardFooter,
  BtnOptions,
} from "./styled.js";

const initialTodo = { title: "titulo", description: "descripcion", color: "#2E6FCC" };
function CardTodo({ todo = initialTodo }) {
  const [_, setLocation] = useLocation();
  const { color, description, title, id } = todo;
  const { state, dispatch } = useContext(TodoContext);

  const handleDelete = (id) => {
    dispatch({
      type: actionsTodo.DELETE_TASK,
      payload: id,
    });
  };
  const handleEdit = (id) => {
    setLocation(`editTask/${id}`);
  };

  const handleIscomplete = (id) => {
  
    const newTodo = [...state.todos];
    const todo = newTodo.find(todo => todo.id === id)
    todo.isComplete = !todo.isComplete;
    console.log(newTodo)

    dispatch({
      type: actionsTodo.EDIT_TASK,
      payload: newTodo,
    });
  }
  return (
    <Card color={color}>
      <CardHeader>
        <Label color={color}>{title}</Label>
        <BtnCheck onClick = {() => handleIscomplete(id)}> ✅</BtnCheck>
      </CardHeader>
      <CardBody>{description}</CardBody>
      <CardFooter>
        <BtnOptions onClick={() => handleDelete(id)}>🗑️</BtnOptions>
        <BtnOptions onClick={() => handleEdit(id)}>✏️</BtnOptions>
      </CardFooter>
    </Card>
  );
}
/* 
CardTodo.defaultProps = {
  todo: { title: "titulo", description: "descripcion", color: "" },
}; */
export default CardTodo;
