import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ButtonAction, CardTodoStyled, CopyCardStyled, TitleCardStyled } from "./styled"

function CardTodo({ todo }) {
  const{ color, title, description} = todo
  console.log(todo.id)
  return (
    <CardTodoStyled color={color}>
      <TitleCardStyled>{title || "title"}</TitleCardStyled>
      <CopyCardStyled>
        {description || "Descripción"}
      </CopyCardStyled>
      <div className="flex">
        <ButtonAction disabled = {!todo.id ? false : true }>
          <DeleteOutlined />
          eliminar
        </ButtonAction>
        <ButtonAction  disabled = {!todo.id ?false : true }>
          <EditOutlined />
          editar
        </ButtonAction>
        <button onClick = {()=>alert("dw")} disabled={!todo.id ?true : false } >sdhfdkf</button>
      </div>
    </CardTodoStyled>
  );
}

CardTodo.defaultProps = {
  title: "título",
  description:"descripción",
  color:"#2196F3",
}




export default CardTodo;
