import useEditTask from "./useEditTask";
import Container from "../../components/Container";
import Form from "../../components/Form";

function EditTask({ params }) {
  const { data, setData } = useEditTask({ params });
  return (
    <section>
      <Container>
        <Form setData={setData} data={data} />
      </Container>
    </section>
  );
}

export default EditTask;
