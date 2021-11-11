import useEditTask from "./useEditTask";
import Container from "../../components/Container";
import Form from "../../components/Form";

function EditTask({ params }) {

  const { todo, setTodo } = useEditTask({ idTodo:parseInt(params.id) });
  
  return (
    <section>
      <Container>
        <Form setTodo={setTodo} todo={todo} />
      </Container>
    </section>
  );
}

export default EditTask;
