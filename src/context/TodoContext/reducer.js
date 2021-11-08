import { actionsTodo } from "./actions";

const reducerTodo = (state, action) => {
  switch (action.type) {
    case actionsTodo.DELETE_TASK:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default reducerTodo;
