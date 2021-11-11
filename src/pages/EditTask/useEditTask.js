import { useEffect, useState } from "react";
import useTodos from "../../hooks/useTodos";

const useEditTask = ({idTodo}) => {

  const { state } = useTodos();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const editData = state.todos.find((data) => data.id === idTodo);
     setTodo(editData);
  }, [setTodo, state, idTodo]);


  return { todo, setTodo };
}

export default useEditTask
