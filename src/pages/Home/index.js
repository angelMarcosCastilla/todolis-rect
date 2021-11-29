import { Link } from "wouter";
import Container from "components/Container";
import ListTodo from "components/ListTodo";
import {AppstoreAddOutlined} from "@ant-design/icons"
import styled from "styled-components";

function Home() {
  return (
    <section>
      <Container>
       <div className="flex">
       <LinkButton to="/addTask"> <AppstoreAddOutlined /> Agregar nueva tarea</LinkButton>
       </div>
        <ListTodo />
      </Container>
    </section>
  );
}

const LinkButton = styled(Link)`
  display: inline-block;
  margin-bottom: 3rem;
  padding: .7rem 1rem;
  border-radius:7px;
  background-color:#2196F3;
  color: #f2f2f2;
  font-size: .9rem;
  font-weight: 700;
  text-decoration: none;
`;

export default Home;
