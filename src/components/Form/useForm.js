import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useTodos from "../../hooks/useTodos";

const useForm = ({ setData, data }) => {
  const {state, dispatch, actionsTodo } = useTodos();
  const [, setLocation] = useLocation();

  const [value, setValue] = useState({ title: "", description: "", color:"#2E6FCC"});

  useEffect(() => {
    data.id && setValue(data)
  },[data])

  const HandleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });

    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClickColor = (e, color) => {

    e.preventDefault();
    setValue({ ...value, color: color });
    setData((prevState) => {
      return { ...prevState, color: color };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(value.id){
      console.log(value, state.todos)
      const editData = state.todos.map((todo) => todo.id === value.id ? value : todo)
      console.log(editData)
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
  return {handleSubmit, handleClickColor, HandleChange, value, data}
}

export default useForm
