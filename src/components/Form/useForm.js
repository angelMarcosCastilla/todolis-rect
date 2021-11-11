import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useTodos from "../../hooks/useTodos";

const useForm = ({ setTodo, todo }) => {

  const {state, dispatch, actionsTodo } = useTodos();
  const [, setLocation] = useLocation();

  const [value, setValue] = useState({ title: "", description: "", color:"#2E6FCC"});

  useEffect(() => {
    todo.id && setValue(todo)
  },[todo])

  const HandleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });

    setTodo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClickColor = (e, color) => {

    e.preventDefault();
    setValue({ ...value, color: color });
    setTodo((prevState) => {
      return { ...prevState, color: color };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(value.id){
      const editData = state.todos.map((data) => data.id === value.id ? value : todo)
      dispatch({
        type: actionsTodo.EDIT_TASK,
        payload: editData,
      });
      setLocation("/");

    }else{

      const data = { ...value, iscomplete: false, id: Date.now() };
      dispatch({
        type: actionsTodo.ADD_TASK,
        payload: data,
      });
      setLocation("/");

    }

   
  };
  return {handleSubmit, handleClickColor, HandleChange, value}
}

export default useForm
