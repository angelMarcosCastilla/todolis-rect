import useTodos from "../../hooks/useTodos";

const useHome = () => {

  const { state, dispatch, actionsTodo } = useTodos();
  
  const handleFilterAll = () => {
    const filterTodos = [...state.todos];
    console.log(filterTodos);
    dispatch({
      type: actionsTodo.FILTER_TASK,
      payload: filterTodos,
    });
  };
  const handleFilterCompleted = () => {
    const filterTodos = state.todos.filter((todo) => todo.isComplete === true);
    dispatch({
      type: actionsTodo.FILTER_TASK,
      payload: filterTodos,
    });
  };
  const handleFilterIncompleted = () => {
    const filterTodos = state.todos.filter((todo) => todo.isComplete === false);
    dispatch({
      type: actionsTodo.FILTER_TASK,
      payload: filterTodos,
    });
  };
  
  return {
    handleFilterCompleted,
    handleFilterAll,
    handleFilterIncompleted
  }
}

export default useHome
