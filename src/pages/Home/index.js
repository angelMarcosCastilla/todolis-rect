import { Link } from "wouter";
import Container from "components/Container";
import ListTodo from "components/ListTodo";
import { AppstoreAddOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useEffect } from "react";
import useUser from "hooks/useUser";
import getTasks from "services/task/getTasks";
import useTask from "hooks/useTask";
import { tasksAction } from "context/TaskContext/actions";

function Home() {
  const { user } = useUser();
  const { dispatch } = useTask();
  
  useEffect(() => {
    user &&
      getTasks(user.uid).then((res) => {
        dispatch({ type: tasksAction.LOAD_TASK, payload: res });
      });
  }, [user, dispatch]);

  return (
    <section>
      <Container>
        <div className="flex">
          <LinkButton to="/addTask">
            {" "}
            <AppstoreAddOutlined /> Agregar nueva tarea
          </LinkButton>
        </div>
        <ListTodo />
      </Container>
    </section>
  );
}

const LinkButton = styled(Link)`
  display: inline-block;
  margin-bottom: 3rem;
  padding: 0.7rem 1rem;
  border-radius: 7px;
  background-color: #2196f3;
  color: #f2f2f2;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
`;

export default Home;
