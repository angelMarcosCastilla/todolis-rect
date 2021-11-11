import styled from "styled-components";
import Container from "../../components/Container";
import Form from "../../components/Form";
import CardTodo from "../../components/CardTodo";
import { useState } from "react";

const initialTodo = { title: "titulo", description: "descripcion", color: "#2E6FCC" };
function AddTask() {
  const [form, setForm] = useState(initialTodo);

  return (
    <section>
      <Container>
        <Grid columns={2} gap={"10rem"}>
          <Form setData={setForm} data = {form}/>
          <CardTodo  todo = {form} />
        </Grid>
      </Container>
    </section>
  );
}

export default AddTask;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap};
`;
