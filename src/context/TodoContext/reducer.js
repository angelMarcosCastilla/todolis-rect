import { actionsTodo } from "./actions";

const reducerTodo = (state, action) => {
  switch (action.type) {
    case actionsTodo.DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case actionsTodo.FILTER_TASK:
      return { ...state, filterTodos: action.payload };
    case actionsTodo.ADD_TASK:
      return { ...state, todos: [...state.todos, action.payload] };
    case actionsTodo.EDIT_TASK:
      return { ...state, todos: action.payload };
   /*  case actionsTodo.ISCOMPLETE_TASK:
      return { ...state, todos: action.payload }; */
    default:
      return state;
  }
};

export default reducerTodo;
