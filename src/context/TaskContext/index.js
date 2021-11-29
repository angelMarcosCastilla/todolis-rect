import { createContext ,useReducer} from "react";
import { initialState } from "./actions";
import taskReducer from "./reducer";

export const TasksContext = createContext();

function TaskProvider({ children }) {

  const [tasks, dispatch] = useReducer(taskReducer, initialState)
  return (
    <TasksContext.Provider value={{tasks, dispatch}}>{children}</TasksContext.Provider>
  );
}

export default TaskProvider;
