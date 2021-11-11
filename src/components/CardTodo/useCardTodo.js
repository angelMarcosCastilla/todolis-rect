import { useLocation } from "wouter";
import useTodos from "../../hooks/useTodos";

const useCardTodo = () => {
  const { dispatch, actionsTodo, state } = useTodos();
  const [, setLocation] = useLocation();

  const handleDelete = (id) => {
    dispatch({
      type: actionsTodo.DELETE_TASK,
      payload: id,
    });
  };

  const handleEdit = (id) => {
    setLocation(`editTask/${id}`);
  };

  const handleIscomplete = (id) => {
    const newTodo = [...state.todos];
    const todo = newTodo.find((todo) => todo.id === id);
    todo.isComplete = !todo.isComplete;

    dispatch({
      type: actionsTodo.EDIT_TASK,
      payload: newTodo,
    });
    
  };
  return { handleDelete, handleEdit, handleIscomplete };
};

export default useCardTodo;
