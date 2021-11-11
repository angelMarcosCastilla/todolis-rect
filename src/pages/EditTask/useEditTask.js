import { useEffect, useState } from "react";
import useTodos from "../../hooks/useTodos";

const useEditTask = ({params}) => {

  const { state } = useTodos();
  const [data, setData] = useState({});


  useEffect(() => {
    const editData = state.todos.find((data) => data.id == params.id);
     setData(editData);
  }, [params, setData, state]);
  return { data, setData };
}

export default useEditTask
