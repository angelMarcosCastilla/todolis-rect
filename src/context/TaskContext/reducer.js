import { tasksAction } from "./actions";

const taskReducer = (state, action) => {
  switch (action.type) {
    case tasksAction.LOAD_TASK:
      return { ...state, tasks: action.payload };
    case  tasksAction.DELETE_TASK:
      return {...state, tasks: action.payload}
    default:
      return state;
  }
};

export default taskReducer;
