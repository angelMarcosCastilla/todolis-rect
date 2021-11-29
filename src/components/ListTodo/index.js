import CardTodo from "components/CardTodo";
import styled from "styled-components";

function ListTodo() {
  return (
    <ListTodoStyled>
      <CardTodo color="#77CB6C" />
    </ListTodoStyled>
  );
}

const ListTodoStyled = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fill,minmax(300px, 1fr));
  gap: 20px;
`;
export default ListTodo;
