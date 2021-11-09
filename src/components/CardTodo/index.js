import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { actionsTodo } from "../../context/TodoContext/actions";
import Label from "../Label";
import {
  Card,
  CardHeader,
  BtnCheck,
  CardBody,
  CardFooter,
  BtnOptions,
} from "./styled.js";

function CardTodo({ todo }) {
  const { title, description, color, id } = todo;
  const { dispatch } = useContext(TodoContext);
  const handleDelete = (id) => {
    dispatch({
      type: actionsTodo.DELETE_TASK,
      payload: id,
    });
  };
  return (
    <Card color={color}>
      <CardHeader>
        <Label color ={color} >{title}</Label>
        <BtnCheck> ✅</BtnCheck>
      </CardHeader>
      <CardBody>{description}</CardBody>
      <CardFooter>
        <BtnOptions onClick={() => handleDelete(id)}>🗑️</BtnOptions>
        <BtnOptions>✏️</BtnOptions>
      </CardFooter>
    </Card>
  );
}

export default CardTodo;
