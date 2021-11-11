import {useContext} from "react"
import { TodoContext} from "../context/TodoContext";
import { actionsTodo} from "../context/TodoContext/actions";

const useTodos = () => {
  const { state, dispatch } = useContext(TodoContext);

  return {state, dispatch, actionsTodo}; 
  
}

export default useTodos
