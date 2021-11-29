import CardTodo from "components/CardTodo";
import Container from "components/Container";
import Form from "components/Form";
import Grid from "layout/Grid";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

const initialState = {
  title: "",
  description: "",
  color: "#2196F3",
};

function AddTask() {
  const [,setLocation] = useLocation()
  const [value, setValue] = useState(initialState);

  return (
    <section>
      <Container column={2}>
        <Grid>
          <Form value={value} setValue={setValue} setLocation={setLocation} />
          <CardTodo todo={value} />
        </Grid>
      </Container>
    </section>
  );
}

export default AddTask;
