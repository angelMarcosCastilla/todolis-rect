import { createContext, useReducer } from "react";
import {initialState} from "./actions"
import reducerTodo from "./reducer"

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducerTodo , initialState)
  const data = { state, dispatch}
  return (
    <TodoContext.Provider value={data}>{children}</TodoContext.Provider>
  );
}

export default TodoProvider;
export {TodoContext}
