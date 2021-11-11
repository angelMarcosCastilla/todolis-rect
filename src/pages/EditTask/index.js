import { useContext, useEffect, useState } from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";
import { TodoContext } from "../../context/TodoContext";

function EditTask({ params }) {
  const { state } = useContext(TodoContext);
  const [data, setData] = useState({});


  useEffect(() => {
    const editData = state.todos.find((data) => data.id == params.id);
     setData(editData);
  }, [params, setData, state]);
  return (
    <section>
      <Container>
        <Form setData = {setData} data = {data} />
      </Container>
    </section>
  );
}

export default EditTask;
 