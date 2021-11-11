import useCardTodo from "./useCardTodo";
import Label from "../Label";
import {
  Card,
  CardHeader,
  BtnCheck,
  CardBody,
  CardFooter,
  BtnOptions,
} from "./styled.js";

const initialTodo = {
  title: "titulo",
  description: "descripcion",
  color: "#2E6FCC",
};

function CardTodo({ todo = initialTodo }) {
  const { color, description, title, id } = todo;
  const { handleDelete, handleEdit, handleIscomplete } = useCardTodo();

  return (
    <Card color={color}>
      <CardHeader>
        <Label color={color}>{title}</Label>
        <BtnCheck onClick={() => handleIscomplete(id)}> ✅</BtnCheck>
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
