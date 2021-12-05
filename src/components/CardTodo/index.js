import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import deleteTask from "services/task/deleteTask";
import {
  ButtonAction,
  CardTodoStyled,
  CopyCardStyled,
  TitleCardStyled,
} from "./styled";
import { Link } from "wouter";
import { tasksAction } from "context/TaskContext/actions";
import useTask from "hooks/useTask";

function CardTodo({ todo }) {
  const {dispatch, tasks} = useTask()

  const handleDeleteTask = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Eliminar",
      text: "¿Estas Seguro que desas eliminar?",
      showCancelButton: true,
      cancelButtonText: "No, deseo eliminar",
      cancelButtonColor: " #c71f25",
      confirmButtonText: "Si, eliminar",
      confirmButtonColor: " #00b377 ",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id);
        dispatch({
          type:tasksAction.DELETE_TASK,
          payload: tasks.tasks.filter(todo => todo.id !== id)
        })
      }
    });
    
  };
  const { color, title, description } = todo;
  return (
    <CardTodoStyled color={color}>
      <TitleCardStyled>{title || "title"}</TitleCardStyled>
      <CopyCardStyled>{description || "Descripción"}</CopyCardStyled>
      <div className="flex">
        <ButtonAction
          onClick={() => handleDeleteTask(todo.id)}
          disabled={!todo.id ? true : false}
        >
          <DeleteOutlined />
          eliminar
        </ButtonAction>
        <Link to={`/editTask/${todo.id}`}>
          <EditOutlined />
          editar
        </Link>
      </div>
    </CardTodoStyled>
  );
}

CardTodo.defaultProps = {
  title: "título",
  description: "descripción",
  color: "#2196F3",
};

export default CardTodo;
