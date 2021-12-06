import CardTodo from "components/CardTodo";
import Container from "components/Container";
import Form from "components/Form";
import useTask from "hooks/useTask";
import useUser from "hooks/useUser";
import Grid from "layout/Grid";
import { useEffect, useState } from "react";
import getOneTask from "services/task/getOneTask";
import { useLocation } from "wouter";
import Loader from "components/Loader";

function EditTask({ params }) {
  const { id } = params;
  const { tasks } = useTask();
  const { user } = useUser();
  const [, setLocation] = useLocation();

  const [value, setValue] = useState(() => {

    if (tasks.tasks) return tasks.tasks.find((todo) => todo.id === id);
    return null;
  });

useEffect(() => {
    !value  && getOneTask(user.uid, id).then(setValue);
  }, [value, id, user.uid]); 
  
  if (!value) return <Loader />;

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

export default EditTask;
