import CardTodo from "components/CardTodo";
import useTask from "hooks/useTask";
import styled from "styled-components";

function ListTodo() {

  const {tasks} = useTask()

  if(!tasks.tasks) return <strong> cargando...</strong>
  return (
    <ListTodoStyled>
      {tasks.tasks.map(res => <CardTodo todo={res}/>)}
    </ListTodoStyled>
  );
}

const ListTodoStyled = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fill,minmax(300px, 1fr));
  gap: 20px;
`;
export default ListTodo;
