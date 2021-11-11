import { useContext } from "react";
import { Link } from "wouter";
import Container from "../../components/Container";
import Label from "../../components/Label";
import TodoContainer from "../../components/TodoContainer";
import { TodoContext } from "../../context/TodoContext";
import { actionsTodo } from "../../context/TodoContext/actions";

function Home() {
  const { state, dispatch } = useContext(TodoContext);

  const handleFilterAll = () => {
    const filterTodos = [...state.todos];
    console.log(filterTodos);
    dispatch({
      type: actionsTodo.FILTER_TASK,
      payload: filterTodos,
    });
  };
  const handleFilterCompleted = () => {
    const filterTodos = state.todos.filter((todo) => todo.isComplete === true);
    dispatch({
      type: actionsTodo.FILTER_TASK,
      payload: filterTodos,
    });
  };
  const handleFilterIncompleted = () => {
    const filterTodos = state.todos.filter((todo) => todo.isComplete === false);
    dispatch({
      type: actionsTodo.FILTER_TASK,
      payload: filterTodos,
    });
  };
  return (
    <section>
      <Container>
        <div className="flex space-between mb-2">
          <div className="flex">
            <Label style ={{"cursor": "pointer"}}  color="#909BAE"  onClick={handleFilterAll}>
              Todos
            </Label>
            <Label style ={{"cursor":"pointer"}} color="#909BAE" onClick={handleFilterCompleted}>
              Completado
            </Label>
            <Label style ={{"cursor":"pointer"}} color="#909BAE" onClick={handleFilterIncompleted}>
              Incompleto
            </Label>
          </div>
          <Link to="addTask">Agregar Tarea</Link>
        </div>
        <TodoContainer />
      </Container>
    </section>
  );
}


  
export default Home;
