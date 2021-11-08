import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";
import { actionsTodo } from "../../context/TodoContext/actions";

function CardTodo({ todo }) {
  const { title, description, color, id } = todo;
  const {dispatch} = useContext(TodoContext);
  const handleDelete = (id) => {
    dispatch({
      type: actionsTodo.DELETE_TASK,
      payload:id
    });
  };
  return (
    <Card color={color}>
      <CardHeader>
        <CarTitulo>{title}</CarTitulo>
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

const Card = styled.article`
  --colorCard: ${(props) => props.color};
  --bgLabel: ${(props) => props.color + "20"};
  background: white;
  padding: 15px 20px;
  height: 200px;
  margin-bottom: 3px;
  border-left: 5px solid var(--colorCard);
  border-radius: 0.4rem;
`;

const CardHeader = styled.header`
  padding: 0.5rem 0;
  margin-bottom: 1.2rem;
  position: relative;
`;

const CarTitulo = styled.h2`
  background-color: var(--bgLabel);
  display: inline;
  padding: 0.3rem 0.7rem;
  font-size: 1rem;
  border-radius: 5px;
  color: var(--colorCard);
`;

const CardBody = styled.div`
  height: 65px;
  margin-bottom: 0.4rem;
`;

const CardFooter = styled.footer`
  padding: 0.3rem 0.7rem;
`;

const BtnCheck = styled.button`
  right: 0;
  top: -10px;
  position: absolute;
`;
const BtnOptions = styled.button`
  cursor: pointer;
`;

export default CardTodo;
