import { createContext, useEffect, useReducer } from "react";
import { initialState } from "./actions";
import reducerTodo from "./reducer";
import { actionsTodo } from "./actions";
const TodoContext = createContext();

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducerTodo, initialState);
  const data = { state, dispatch };
  useEffect(() => {
    const filterTodos = [...state.todos];
    dispatch({
      type: actionsTodo.FILTER_TASK,
      payload: filterTodos,
    });
  }, [state.todos]);
  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
}

export default TodoProvider;
export { TodoContext };
